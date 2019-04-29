//map
  let map = L.map('mymap').setView([45.589175, 5.911509], 8);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);




  // var gpx = ('../../src/gpx/test.gpx',{mode : 'no-cors'}); // URL to your GPX file or the GPX itself
  // new L.GPX(gpx, {async: true}).on('loaded', function(e) {
  //   map.fitBounds(e.target.getBounds());
  // }).addTo(map);



  function clearMap() {
    location.reload();
  }

   


   
  




  