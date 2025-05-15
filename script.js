// Initialize with empty data for blank map
const defaultStations = stations.slice() // Store original data
const defaultPath = walkingPath.slice()

// Clear stations and path for blank start
if (window.location.search.includes('blank=true')) {
  stations.length = 0
  walkingPath.length = 0
}

// Define color variables to match CSS
const colors = {
  wineRed: '#8e0000',
  blue: '#66b5fe',
  orange: '#fa670b',
  lightBlue: '#74b6ee',
}

// Initialize the map centered on Kindenheim
const map = L.map('map').setView([49.60502176933786, 8.173763751983644], 14)

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map)

// Define station icon
const stationIcon = L.icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

// Location variables
let userLocationMarker = null
let isTrackingLocation = false
let locationCircle = null
let currentStation = null

// Format the walking path to work with Leaflet
const formattedPath = walkingPath.map((point) => [point.lat, point.lng])

// Add the walking path line
const path = L.polyline(formattedPath, {
  color: colors.wineRed,
  weight: 5,
  opacity: 0.7,
  dashArray: '10, 10',
  lineJoin: 'round',
}).addTo(map)

// Fit map to the path bounds
if (formattedPath.length > 0) {
  map.fitBounds(path.getBounds(), { padding: [50, 50] })
}

// Add station markers
const markers = []
stations.forEach((station) => {
  const marker = L.marker([station.lat, station.lng], { icon: stationIcon })
    .addTo(map)
    .bindTooltip(station.name)

  // Add click handler
  marker.on('click', () => showStationInfo(station))
  markers.push(marker)
})

// Toggle info panel
const toggleInfoBtn = document.getElementById('toggle-info')
const stationInfo = document.getElementById('station-info')

// Initially ensure panel is completely hidden
stationInfo.style.transform = 'translateY(100%)'

toggleInfoBtn.addEventListener('click', () => {
  if (stationInfo.classList.contains('hidden')) {
    showPanel()
  } else {
    hidePanel()
  }
})

function showPanel() {
  stationInfo.classList.remove('hidden')
  toggleInfoBtn.classList.add('active')
}

function hidePanel() {
  stationInfo.classList.add('hidden')
  toggleInfoBtn.classList.remove('active')
}

// Show station info when a marker is clicked
function showStationInfo(station) {
  const stationTitle = document.getElementById('station-title')
  const stationContent = document.getElementById('station-content')

  currentStation = station

  // Update content
  stationTitle.textContent = station.name

  // Clear previous content
  stationContent.innerHTML = ''

  // Add description
  const description = document.createElement('p')
  description.textContent = station.description
  description.className = 'station-description'
  stationContent.appendChild(description)

  // Add offerings heading
  const offeringsTitle = document.createElement('h3')
  offeringsTitle.textContent = 'Angebote:'
  offeringsTitle.style.marginTop = '1rem'
  stationContent.appendChild(offeringsTitle)

  // Add offerings
  station.offerings.forEach((offering) => {
    const item = document.createElement('div')
    item.className = 'menu-item'

    const itemName = document.createElement('h3')
    itemName.textContent = offering.name
    item.appendChild(itemName)

    const itemDescription = document.createElement('p')
    itemDescription.textContent = offering.description
    item.appendChild(itemDescription)

    const itemPrice = document.createElement('p')
    itemPrice.textContent = offering.price
    itemPrice.className = 'price'
    item.appendChild(itemPrice)

    stationContent.appendChild(item)
  })

  // Reset any inline transform styles
  stationInfo.style.transform = ''

  // Show the info panel
  showPanel()
}

// Close button functionality
document.getElementById('close-info').addEventListener('click', () => {
  hidePanel()
})

// Make the map responsive
window.addEventListener('resize', () => {
  map.invalidateSize()
})

// Location Button
const locateBtn = document.getElementById('locate-me')

locateBtn.addEventListener('click', () => {
  if (isTrackingLocation) {
    stopTrackingLocation()
  } else {
    startTrackingLocation()
  }
})

function startTrackingLocation() {
  if (navigator.geolocation) {
    locateBtn.classList.add('active')
    isTrackingLocation = true

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        showUserLocation(latitude, longitude, position.coords.accuracy)

        // Watch for position changes
        const watchId = navigator.geolocation.watchPosition(
          (newPosition) => {
            const { latitude, longitude } = newPosition.coords
            updateUserLocation(latitude, longitude, newPosition.coords.accuracy)
          },
          (error) => {
            console.error('Error watching position:', error)
            stopTrackingLocation()
          },
          { enableHighAccuracy: true }
        )

        // Store watch ID in the button for later cleanup
        locateBtn.dataset.watchId = watchId
      },
      (error) => {
        console.error('Error getting position:', error)
        stopTrackingLocation()
        alert(
          'Standort konnte nicht ermittelt werden. Bitte überprüfen Sie Ihre Standorteinstellungen.'
        )
      },
      { enableHighAccuracy: true }
    )
  } else {
    alert('Ihr Browser unterstützt keine Standortverfolgung.')
  }
}

function stopTrackingLocation() {
  locateBtn.classList.remove('active')
  isTrackingLocation = false

  // Clear the watch
  if (locateBtn.dataset.watchId) {
    navigator.geolocation.clearWatch(Number(locateBtn.dataset.watchId))
    delete locateBtn.dataset.watchId
  }

  // Remove location marker and circle
  if (userLocationMarker) {
    map.removeLayer(userLocationMarker)
    userLocationMarker = null
  }

  if (locationCircle) {
    map.removeLayer(locationCircle)
    locationCircle = null
  }
}

function showUserLocation(lat, lng, accuracy) {
  // Create a marker for user location if it doesn't exist
  if (!userLocationMarker) {
    userLocationMarker = L.marker([lat, lng], {
      icon: L.divIcon({
        className: 'user-location-marker',
        html: '<div class="location-marker-inner"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      }),
    }).addTo(map)

    // Add CSS for the marker
    const style = document.createElement('style')
    style.textContent = `
      .user-location-marker {
        background: transparent;
      }
      .location-marker-inner {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: rgba(102, 181, 254, 0.7);
        border: 2px solid white;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
      }
      .location-accuracy-circle {
        fill: rgba(102, 181, 254, 0.1);
        stroke: rgba(102, 181, 254, 0.4);
        stroke-width: 1;
      }
    `
    document.head.appendChild(style)
  } else {
    userLocationMarker.setLatLng([lat, lng])
  }

  // Create or update accuracy circle
  if (locationCircle) {
    locationCircle.setLatLng([lat, lng])
    locationCircle.setRadius(accuracy)
  } else {
    locationCircle = L.circle([lat, lng], {
      radius: accuracy,
      className: 'location-accuracy-circle',
    }).addTo(map)
  }

  // Center map on user location
  map.setView([lat, lng], 16)
}

function updateUserLocation(lat, lng, accuracy) {
  if (userLocationMarker && locationCircle) {
    userLocationMarker.setLatLng([lat, lng])
    locationCircle.setLatLng([lat, lng])
    locationCircle.setRadius(accuracy)
  }
}
