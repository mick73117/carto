//icon
let iconGeo = new L.Icon({
    iconUrl: ' ../../src/icons/Templatic-map-icons/professional.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 35],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
// //Géolocalisation
function currentLocation() {
    let p = document.getElementById("geolocalisation");
    p.onclick = currentLocation;
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((function (position) {
              let marker = L.marker([position.coords.latitude, position.coords.longitude], {
                  icon: iconGeo
 }).addTo(map);
              marker.bindPopup("Ma position :<br> Latitude : " + position.coords.latitude + ',<br>Longitude ' + position.coords.longitude).openPopup();
              //center: new google.maps.latLng(lat, lng)
          }));
      } else {
          alert("La géolocalisation n'est pas supportée par ce navigateur.");
      }
  }
    