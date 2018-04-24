let map = L.map('VictoriaMap').setView([20.755035, -155.983552], 13)

let hawaiimap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png').addTo(map)

let hawaiimap2 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')

let hawaiimap3 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}')

let hawaiiBaseMaps = {
  'Open world imagery map': hawaiimap,
  'Open top map': hawaiimap2,
  'World physical map': hawaiimap3,
}

mygeoJSONstyle = function (states) {
  let age = states.properties.MED_AGE
  let statecolor = 'Green'
  if ( age < 38 ) {statecolor = 'Blue'}
  let mygeoJSONstyle = {
    color: statecolor,
    weight: 2,
    fillOpacity: 0.2,
    opacity: 0.3,
  }
  return mygeoJSONstyle
}

function createPopup (states, statelayer) {
  let population = states.properties.POPULATION
  let name = states.properties.STATE_NAME
  let age = states.properties.MED_AGE
  statelayer.bindPopup('Population of ' + name + ':' + population + '<br>Median age ' + ': ' + age + '<br>National average: 38')
}

geoJSONoptions = {
  style: mygeoJSONstyle,
  onEachFeature: createPopup
}

L.geoJSON(stateDemo, geoJSONoptions).addTo(map)
L.control.layers(hawaiiBaseMaps).addTo(map)
