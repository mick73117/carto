//icon
let iconBus = new L.Icon({
    iconUrl: '../../src/icons/Templatic-map-icons/transport.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 35],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

let adressBus = ('https://donnees.grandchambery.fr/api/records/1.0/search/?dataset=t_troncon_shape&rows=300&facet=code_ligne&facet=commune&facet=nom');
function bus(){
   fetch(adressBus)
       .then(function(response){
           return response.json()
       }).then (resp => {
        for (let i = 0; i < resp.records.length; i++) {
          L.marker(resp.records[i].fields.geo_point_2d, {icon: iconBus})
            .bindPopup(resp.records[i].fields.nom_park)
            .addTo(map);
        }
                   
       })
      }
    ;
  



    // let urlBus = ('https://donnees.grandchambery.fr/api/records/1.0/search/?dataset=t_troncon_shape&rows=300&facet=code_ligne&facet=commune&facet=nom');
    // function tronconBus(){
    //    fetch(urlBus)
    //        .then(function(responseBus){
    //            return responseBus.json()
    //        }).then (respBus => {
    //         for (let i = 0; i < respBus.records.length; i++) {
    //              let coordinates = respBus.records[i].fields.geo_shape.coordinates;
    //              let coordinates_revers = coordinates.map(function(cord) {
    //                return cord.reverse();
    //              })
           
    //              console.log (coordinates_revers)
    //              L.polyline (coordinates_revers, {color: 'green'})
    //              .addTo(map);
    //         }
                       
    //        })
    //       }
    //     ;
    //    tronconBus();

