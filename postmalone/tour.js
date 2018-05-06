let postmalone = L.map('postmalonetour').setView([38, -98], 4)

let beerbongys = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}').addTo(postmalone)

let bentleys = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}')

let richandsad = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}')

let postbasemap = {
  'Open street map': beerbongys,
  'Open top map': bentleys,
  'World Physical': richandsad,
}

let twentyonesavage = {
  'Open street map': beerbongys,
  'Open top map': bentleys,
  'World Physical': richandsad,
}

let postpin = L.icon({
  iconUrl: 'postpin.png',
  iconSize: [25, 25],
  iconAnchor: [3, 3],
  popupAnchor: [-3, -76]
})

let kansas = L.marker([39.113709, -94.876560], {icon: postpin}).addTo(postmalone);
kansas.bindPopup('<center>Venue: Providence Medical Center Ampitheater </center>' + '<br>Location: Bonner Springs, KS, USA ' + '<br>Date: may. 5 ' + '<br>Ticket Availability: Sold Out')

let tennessee = L.marker([36.167512, -86.781840], {icon: postpin}).addTo(postmalone);
tennessee.bindPopup('<center>Venue: Nashville Municipal Auditorium  </center>' + '<br>Location: NASHVILLE, TN, USA ' + '<br>Date: may. 8  ' + '<br>Ticket Availability:  buy tickets')

var kstotn = [
    [39.113709, -94.876560],
    [36.167512, -86.781840]
];
var kstnline = L.polyline(kstotn, {color: 'blue'}).addTo(postmalone);

let florida = L.marker([30.323682, -81.636035], {icon: postpin}).addTo(postmalone);
florida.bindPopup('<center>Venue: Dailys Place </center>' + '<br>Location: JACKSONVILLE, FL, USA ' + '<br>Date: may. 10 ' + '<br>Ticket Availability: buy tickets')

var tntofl = [
    [36.167512, -86.781840],
    [30.323682, -81.636035]
];
var tnflline = L.polyline(tntofl, {color: 'blue'}).addTo(postmalone);

let northcarolina = L.marker([35.327252, -80.710705], {icon: postpin}).addTo(postmalone);
northcarolina.bindPopup('<center>Venue: PNC Music Pavilion </center>' + '<br>Location:  CHARLOTTE, NC, USA ' + '<br>Date: may. 16 ' + '<br>Ticket Availability: buy tickets')

var fltonc = [
    [30.323682, -81.636035],
    [35.327252, -80.710705]
];
var flncline = L.polyline(fltonc, {color: 'blue'}).addTo(postmalone);

let maryland = L.marker([39.354042, -76.674802], {icon: postpin}).addTo(postmalone);
maryland.bindPopup('<center>Venue: Preakness </center>' + '<br>Location:  BALTIMORE, MD, USA ' + '<br>Date: may. 19 ' + '<br>Ticket Availability: buy tickets')

var nctomd = [
    [35.327252, -80.710705],
    [39.354042, -76.674802]
];
var ncmdline = L.polyline(nctomd, {color: 'blue'}).addTo(postmalone);

L.control.layers(postbasemap).addTo(postmalone)
