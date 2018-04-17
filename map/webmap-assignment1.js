//step 7: Create the first line of JavaScript to create an empty map. Set your own variable name, map div id, coordinates, and zoom level
//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let map = L.map('map1').setView([20.756092, -155.985275], 13)
//step 8: Add a basemap layer to the map using your preferred basemap’s URL and your own map object’s name’.
L.tileLayer(L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png').addTo(map)
//step 9a: Mark a point of interest on the map using Leaflet’s marker method. Use your own variable names and coordinates.
let mypoint = L.mypoint([20.756092, -155.985275]).addTo(map)
//step 9b: Draw a polygon around an area of interest.
let polygon = L.polygon([
  [20.756092, -155.985275],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map)
//step 10: Create popups for your marker and polygon. Note the backslash allowing the use of an apostrophe.
polygon.bindPopup('St. Katharine\'s and Wapping')
mypoint.bindPopup('London Bridge<br>Station')
//step 11: Create an “event listener” that listens for a click on the map and then runs a function to log the clicked location to the console.
map.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
//step 12: Consult the Leaflet documentation (or Google) to add a “polyline” to the map. No popup needed.
