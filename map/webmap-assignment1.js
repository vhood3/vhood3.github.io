let map = L.map('VictoriaMap').setView([20.755035, -155.983552], 13)
let hawaiimap = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png'
L.tileLayer(hawaiimap).addTo(map)
let mypoint = L.marker([20.756222, -155.980623]).addTo(map)
let myshape = L.polygon([
  [20.755035, -155.983552],
  [20.754614, -155.984624],
  [20.753326, -155.984078]
]).addTo(map)

myshape.bindPopup('Hana Bay Beach Park')
mypoint.bindPopup('Maplesden Beach')

var latlng = [
  [20.759171, -155.987151],
  [20.756513, -155.985506],
];
var line = L.polyline(latlng, {color: 'red'}).addTo(map)

map.on('click', function (event){
  consol.log('You clicked the map at' + event.latlng)
})
