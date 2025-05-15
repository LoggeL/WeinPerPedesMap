# WeinPerPedes App

Eine interaktive Karte für den WeinPerPedes Weinwandertag in Kindenheim.

## Funktionen

- Interaktive Karte von Kindenheim
- Markierte Wanderroute durch den Ort
- Stationen mit Weingütern und Gastronomie
- Detailansicht für jede Station mit Angeboten

## Verwendung

Öffnen Sie einfach die `index.html` Datei in einem Webbrowser.

Alternativ können Sie einen lokalen Webserver nutzen:

- Mit Python: `python -m http.server` (im Projektverzeichnis)
- Mit Node.js: `npx serve` (im Projektverzeichnis, benötigt Node.js)

## Anzeigen von Informationen

1. Die Karte zeigt verschiedene Stationen entlang der Wanderroute
2. Rote Marker kennzeichnen die Weingüter und Gastronomie-Stationen
3. Die gestrichelte Linie zeigt den empfohlenen Wanderweg
4. Klicken Sie auf einen Marker, um Details zur Station zu sehen:
   - Name der Station
   - Beschreibung
   - Angebote mit Preisen

## Technologien

- HTML5
- CSS3
- JavaScript
- Leaflet.js für die Kartendarstellung

## Hinweise

- Die Anwendung benötigt eine Internetverbindung für die Kartendaten
- Die GPS-Koordinaten und Stationsdetails können in der Datei `stations.js` angepasst werden
