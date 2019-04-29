// Icons
let iconParking = new L.Icon({
  iconUrl: '../../src/icons/Templatic-map-icons/automotive.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 35],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


// Callback function to retrieve dynamic data (fonction callback pour récuperer des données en dynamique)
let urlPark = 'https://donnees.grandchambery.fr/api/records/1.0/search/?dataset=parkings-enclos-ou-ouvrage-a-chambery&rows=50&facet=delegataire&facet=secteur&facet=type_park&facet=remarque';
function loadData(url, callback) {
  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (dataPark) {
      callback(dataPark)
    });
};

function park(data) {
  for (let i = 0; i < data.records.length; i++) {
    L.marker(data.records[i].fields.coordonnees_gps, {
        icon: iconParking
      })
      .bindPopup(data.records[i].fields.nom_park)
      .addTo(map);

  };
  console.log(data);
};
// loadData(urlPark, park);




// let adress = ('https://donnees.grandchambery.fr/api/records/1.0/search/?dataset=parkings-enclos-ou-ouvrage-a-chambery&rows=50&facet=delegataire&facet=secteur&facet=type_park&facet=remarque');
// function parking(){
//   let markersCluster = new L.MarkerClusterGroup();
//    fetch(adress)
//        .then(function(response){
//            return response.json()
//        }).then (resp => {
//         for (let i = 0; i < resp.records.length; i++) {
//           let marker = L.marker(resp.records[i].fields.coordonnees_gps,{icon: iconParking})
//             .bindPopup(resp.records[i].fields.nom_park);
//             markersCluster.addLayer(marker);
//         }
//         map.addLayer(markersCluster);

//        })
//       }
//     ;




