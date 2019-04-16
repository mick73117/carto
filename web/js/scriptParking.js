//Icons
    let iconParking = new L.Icon({
        iconUrl: '../../src/icons/Templatic-map-icons/automotive.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 35],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });


      let adress = ('https://donnees.grandchambery.fr/api/records/1.0/search/?dataset=parkings-enclos-ou-ouvrage-a-chambery&rows=50&facet=delegataire&facet=secteur&facet=type_park&facet=remarque');
      function parking(){
         fetch(adress)
             .then(function(response){
                 return response.json()
             }).then (resp => {
              for (let i = 0; i < resp.records.length; i++) {
                L.marker(resp.records[i].fields.coordonnees_gps,{icon: iconParking})
                  .bindPopup(resp.records[i].fields.nom_park)
                  .addTo(map);
              }
              console.log(resp);
                         
             })
            }
          ;
        //  parking();

// var markersCluster = new L.MarkerClusterGroup();

// var cities = getCities();
// for (var i = 0; i < cities.length; i++) {
//     var latLng = new L.LatLng(cities[i][1], cities[i][2]);
//     var marker = new L.Marker(latLng, {title: cities[i][0]});
//     markersCluster.addLayer(marker);
// }

// map.addLayer(markersCluster);






      //    var markersClusterCustomPlus = new L.MarkerClusterGroup({
      //     iconCreateFunction: function(cluster) {
      //         var digits = (cluster.getChildCount()+'10').length;
      //         return L.divIcon({ 
      //             html: cluster.getChildCount(), 
      //             className: 'cluster digits-'+digits,
      //             iconSize: null 
      //         });
      //     }
      // });
      // map.addLayer( markerClustersCustomPlus );































//         let urlPark = ('https://donnees.grandchambery.fr/api/records/1.0/search/?dataset=parkings-enclos-ou-ouvrage-a-chambery&rows=50&facet=delegataire&facet=secteur&facet=type_park&facet=remarque');
//       //fonction callback pour récuperer des données en dynamique
//          function loadData(urlPark, callback) {
//            fetch(urlPark)
//                 .then(function(response) {
//                   return response.json()
//                 })
//                 .then(function(dataPark) {
//                   callback(dataPark)
//                 });
//          };
         
//          function park(data) {
//   for (let i = 0; i < data.length; i++) {
//     L.marker(data.records[i].fields.coordonnees_gps,{icon: iconParking})
//       .bindPopup(data.records[i].fields.nom_park)
//       .addTo(map);
      
//   };
//   console.log(data);
// };
// loadData(urlPark,park);













 