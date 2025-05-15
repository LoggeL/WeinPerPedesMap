# WeinPerPedes App

Eine interaktive Karte für den WeinPerPedes Weinwandertag in Bockenheim/Kindenheim.

## Funktionen

- Interaktive Karte von Bockenheim/Kindenheim
- Markierte Wanderroute durch die Orte
- Stationen mit Weingütern und Gastronomie
- Detailansicht für jede Station mit Angeboten
- GPS-Standortverfolgung für Besucher
- Responsive Design für mobile Geräte
- Intuitive Benutzeroberfläche mit WeinPerPedes-Markenfarben

## Verwendung

Öffnen Sie einfach die `index.html` Datei in einem Webbrowser.

Alternativ können Sie einen lokalen Webserver nutzen:

- Mit Python: `python -m http.server` (im Projektverzeichnis)
- Mit Node.js: `npx serve` (im Projektverzeichnis, benötigt Node.js)
- Mit PowerShell: `python -m http.server` oder `Start-Process "http://localhost:8000/"`

## Anzeigen von Informationen

1. Die Karte zeigt verschiedene Stationen entlang der Wanderroute
2. Rote Marker kennzeichnen die Weingüter und Gastronomie-Stationen
3. Die gestrichelte Linie zeigt den empfohlenen Wanderweg
4. Klicken Sie auf einen Marker, um Details zur Station zu sehen:
   - Name der Station
   - Beschreibung
   - Angebote mit Preisen

## Standortverfolgung

- Klicken Sie auf die Standort-Schaltfläche, um Ihren aktuellen Standort anzuzeigen
- Der blaue Punkt zeigt Ihre Position auf der Karte
- Der transparente Kreis zeigt die Genauigkeit der Standortbestimmung
- Die Karte wird automatisch zentriert, um Ihren Standort zu zeigen

## Technologien

- HTML5
- CSS3
- JavaScript
- Leaflet.js für die Kartendarstellung
- Font Awesome für Symbole
- SVG für das WeinPerPedes-Logo

## Hinweise

- Die Anwendung benötigt eine Internetverbindung für die Kartendaten
- Die GPS-Koordinaten und Stationsdetails können in der Datei `stations.js` angepasst werden
- Die Standortverfolgung funktioniert nur mit Geräten, die GPS unterstützen
- Für die beste Erfahrung wird ein aktueller Browser empfohlen (Chrome, Firefox, Safari oder Edge)

## Entwicklung

Die App verwendet ein einfaches, modulares Design:

- `index.html` - Grundlegende Seitenstruktur
- `styles.css` - Alle Styling-Informationen
- `script.js` - Anwendungslogik und Interaktivität
- `stations.js` - Datendefinitionen für Stationen und Routenpunkte
- `wppLogo.svg` - Logo-Grafik

Änderungen an der App können durch Bearbeitung dieser Dateien vorgenommen werden.
