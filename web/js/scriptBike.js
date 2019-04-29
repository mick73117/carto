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
   


