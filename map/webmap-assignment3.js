let map = L.map('VictoriaMap').setView([20.755035, -155.983552], 13)

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png').addTo(map)

let myBeachIcon = L.icon({
  iconUrl: 'hawaii.png',
  iconSize: [38, 95], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

let mymarker = L.marker([20.756222, -155.980623], {icon: myBeachIcon}).addTo(map);

let polyStyle = {
  color: 'blue',
  fillColor: 'yellow'
  fillOpacity: 0.4
}

let polyCoords = [
  [20.755035, -155.983552],
  [20.754614, -155.984624],
  [20.753326, -155.984078]]

let myPolygon = L.polygon(polyCoords, polyStyle).addTo(map)
