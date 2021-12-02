const apiKey = 'pk.eyJ1IjoiY3dlc3RvbjA3MjciLCJhIjoiY2t3Z28xMTI0MHE5bjJzbzQzY3c4YjB5YyJ9.hsifkT89D-VfGgEZOd326g'

const mymap = L.map('map').setView([40.0467915, -75.266714], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: apiKey
}).addTo(mymap);

// Add Marker

const markerOne = L.marker([40.0543183, -75.1848948]).addTo(mymap);
const markerTwo = L.marker([40.055530, -75.228949]).addTo(mymap);
const markerThree = L.marker([40.0589531, -75.158798]).addTo(mymap);
const markerFour = L.marker([39.9026587, -75.156368]).addTo(mymap);
const markerFive = L.marker([39.9868851, -75.1328137]).addTo(mymap);
const markerSix = L.marker([39.9621973, -75.1608643]).addTo(mymap);
const markerSeven = L.marker([39.9489298, -75.1705212]).addTo(mymap);

// Add Pop Up Message

let templateOne = `


<div style="text-align:center">
<h3>Harmony Location One</h3>
  <img width="150" height="150"src="/img/harmonyfridgetwo.jpeg">
  <p>Do you want to donate? Click below!<p>
  <ul class="template-list">
    <li><a class="" href="/donate"target="_blank">donate</a></li>
  </ul>
</div>
`
markerOne.bindPopup(templateOne);


let templateTwo = `


<div style="text-align:center">
<h3>Harmony Location Two</h3>
  <img width="150" height="150"src="/img/harmonyfridgetwo.jpeg">
  <p>Do you want to donate? Click below!<p>
  <ul class="template-list">
    <li><a class="profile" href="/donate"target="_blank">donate</a></li>
  </ul>
</div>
`
markerTwo.bindPopup(templateTwo);

let templateThree = `


<div style="text-align:center">
<h3>Harmony Location Three</h3>
  <img width="150" height="150"src="/img/harmonyfridgetwo.jpeg">
  <p>Do you want to donate? Click below!<p>
  <ul class="template-list">
    <li><a class="profile" href="/donate"target="_blank">donate</a></li>
  </ul>
</div>
`
markerThree.bindPopup(templateThree);


let templateFour = `


<div style="text-align:center">
<h3>Philabundance</h3>
  <img width="150" height="150"src="/img/philabundanceoffice.jpeg">
  <p>Do you want to donate? Click below!</p>
  <ul class="template-list">
    <li><a href="https://www.philabundance.org/" target="_blank">Philabundance</a></li>
  </ul>
</div>
`
markerFour.bindPopup(templateFour);


let templateFive = `


<div style="text-align:center">
<h3>St Francis</h3>
  <img width="150" height="150"src="/img/stfrancisinn.jpeg">
  <p>Do you or someone you know need a community that provides food, clothing and hospitality? Click below</p>
  <ul class="template-list">
    <li><a href="http://stfrancisinn.org/?doing_wp_cron=1636230780.5676250457763671875000" target="_blank">St Francis Inn Ministries</a></li>
  </ul>
</div>
`
markerFive.bindPopup(templateFive);

let templateSix = `


<div style="text-align:center">
<h3>Bebashi- Transition to Hope</h3>
  <img width="150" height="150"src="/img/bebashi.jpeg">
  <br>
  <p>Do you or someone you know need a community that offers confidential testing of HIV/AIDS, STI's as well as pregnancy, breast health and hunger relief? This organization is also a safe space where persons of trans experience or gender non-conforming individuals can have free access to the gender affirming items they need to authentically express their gender identity. If you would like to learn more, click below</p>
  <ul class="template-list">
    <li><a href="http://stfrancisinn.org/?doing_wp_cron=1636230780.5676250457763671875000" target="_blank">Bebashi- Transition to Hope</a></li>
  </ul>
</div>
`
markerSix.bindPopup(templateSix);

let templateSeven = `


<div style="text-align:center">
<h3>Saint Mark's Food Cupboard</h3>
  <img width="150" height="150"src="/img/saintmarkschurch.jpeg">
  <br>
  <p>Do you or anyone you know need supplemental food assistance, clothing, household/personal care items, and referrals to various other social service agences? Please click below</p>
  <ul class="template-list">
    <li><a href="https://www.saintmarksphiladelphia.org/foodcupboard" target="_blank">Saint Mark's Food Cupboard</a></li>
  </ul>
</div>
`
markerSeven.bindPopup(templateSeven);



//Add Circle

const circleOne = L.circle([40.0543183, -75.1848948], {
  radius: 700,
  color: 'purple',
  fillColor: 'pink',
  fillOpacity: 0.2
}).addTo(mymap)

const circleTwo = L.circle([40.055530, -75.228949], {
  radius: 700,
  color: 'purple',
  fillColor: 'pink',
  fillOpacity: 0.2
}).addTo(mymap)

const circleThree = L.circle([40.0589531, -75.158798], {
  radius: 700,
  color: 'purple',
  fillColor: 'pink',
  fillOpacity: 0.2
}).addTo(mymap)

const circleFour = L.circle([39.9026587, -75.156368], {
  radius: 700,
  color: 'red',
  fillColor: 'purple',
  fillOpacity: 0.2
}).addTo(mymap)

const circleFive = L.circle([39.9868851, -75.1328137], {
  radius: 700,
  color: 'red',
  fillColor: 'purple',
  fillOpacity: 0.2
}).addTo(mymap)

const circleSix = L.circle([39.9621973, -75.1608643], {
  radius: 700,
  color: 'red',
  fillColor: 'purple',
  fillOpacity: 0.2
}).addTo(mymap)


const circlSeven = L.circle([39.9489298, -75.1705212], {
  radius: 700,
  color: 'red',
  fillColor: 'purple',
  fillOpacity: 0.2
}).addTo(mymap)

