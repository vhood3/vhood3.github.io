let map = L.map('VictoriaMap').setView([20.755035, -155.983552], 13)

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png').addTo(map)

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

let geoJSONoptions = {
  style: mygeoJSONstyle,
  onEachFeature: createPopup
}

L.geoJSON(stateDemo, geoJSONoptions).addTo(map)
