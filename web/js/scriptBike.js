let adressBikes = ('https://donnees.grandchambery.fr/api/records/1.0/search/?dataset=t_troncon_cycle&rows=300&facet=typeamenag');
function bike(){
   fetch(adressBikes)
       .then(function(responseBike){
           return responseBike.json()
       }).then (respBike => {
        for (let i = 0; i < respBike.records.length; i++) {
             let coordinates = respBike.records[i].fields.geo_shape.coordinates;
             let coordinates_revers = coordinates.map(function(cord) {
               return cord.reverse();
             })
       
             console.log (coordinates_revers)
             L.polyline (coordinates_revers, {color: 'green'})
             .addTo(map);
        }
                   
       })
      }
    ;
   


//    var latlngs = respBike.records[i].fields.geo_point_2d
// var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
// // zoom the map to the polyline
// map.fitBounds(polyline.getBounds());




// .then(function(response){
//     return response.json()
// }).then (resp => {
//  for (let i = 0; i < resp.records.length; i++) {
//       var coordinates = response.records.fields.geo_shape.coodinates;
//       var coordinates_revers = coordinates.map(function(cord) {
//         return cord.reverse();
//       })

//       console.log (coordinates_revers)
//       L.polyline (coordinates_revers)
//       .addTo(map);
//  }
 
            
// })
// }
// ;