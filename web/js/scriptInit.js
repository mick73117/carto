function mapInit() {
  var map = L.map('mymap').setView([45.589175, 5.911509], 10);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
 

//icons
  let iconVue = new L.Icon({
   iconUrl: '../../../src/icons/Templatic-map-icons/photography.png',
   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
   iconSize: [25, 35],
   iconAnchor: [12, 41],
   popupAnchor: [1, -34],
   shadowSize: [41, 41]
 });

// //Géolocalisation

// function geo() {
// map.locate({setView: true, maxZoom: 10});

// function onLocationFound(e) {
//     var radius = e.accuracy / 2;

//     L.marker(e.latlng).addTo(map)
//         .bindPopup("Vous êtes dans " + radius + " mètres de ce point").openPopup();

//     L.circle(e.latlng, radius).addTo(map);
// }

// map.on('locationfound', onLocationFound);
// }




    // Belvédère des Chenevières
    var marker = L.marker([45.593924, 5.727414],{icon: iconVue}).addTo(map);
    marker.bindPopup('Belvédère des Chenevières<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/30917_apidae-objet-grid.jpg" height="150px" width="150px"/></br>C\'est depuis le village de Ste Marie d\'Alvey que l\'on peut bénéficier d\'un superbe point de vue sur la plaine du Guiers, le Pays du Lac d\'Aiguebelette, l\'Isère. Une table d\'orientation permet de comprendre ce paysage à 180°.<a href="https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/belvedere-des-chenevieres-sainte-marie-dalvey/" title="Google">En savoir plus</a>');


    //Point de vue de Saint Albin de Vaulserre
    var marker = L.marker([45.504404, 5.701581],{icon: iconVue}).addTo(map);
    marker.bindPopup('Point de vue de Saint Albin de Vaulserre<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/2180463_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Bénéficiez, depuis le village de St Albin de Vaulserre, d\'un superbe point de vue sur la vallée du Guiers et les massifs pré Alpins. Une table d\'orientation permet de comprendre ce paysage à 120°.<a href="https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/point-de-vue-de-saint-albin-de-vaulserre-saint-albin-de-vaulserre/" title="Google">En savoir plus</a>');


    //Itinéraires Raquettes sur le Mont de l'Epine
    var marker = L.marker([45.616275, 5.803802],{icon: iconVue}).addTo(map);
    marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/5028324_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Profitez des joies de la raquette à proximité de Yenne ! 3 itinéraires ont été balisés au départ du stade de neige de Verthemex. Situés entre 1000 et 1500m d\'altitude dans une ambiance forestière, ils vous guideront vers des points de vue remarquables.<a href="https://www.pays-lac-aiguebelette.com/loisir/itineraires-raquettes-sur-le-mont-de-lepine-verthemex/" title="Google">En savoir plus</a>');

    //Table d'orientation de la Vierge de Vacheresse
    var marker = L.marker([45.628911, 5.796723],{icon: iconVue}).addTo(map);
    marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/4020133_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Site incontournable pour les amateurs d\'excursions de pleine nature: vue panoramique sur le canton de Yenne et de Novalaise. Lieu idéal pour apprécier un coucher de soleil.<a href="https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/table-dorientation-de-la-vierge-de-vacheresse-verthemex/" title="Google">En savoir plus</a>');

    //Table d'orientation du Relais du Chat
    var marker = L.marker([45.659763, 5.821366],{icon: iconVue}).addTo(map);
    marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/4932981_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Laissez-vous séduire par le point de vue le plus haut du canton de Yenne dévoilant le lac du Bourget et de nombreux massifs alpins dont le Mont Blanc.<a href="https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/table-dorientation-du-relais-du-chat-saint-paul-sur-yenne/" title="Google">En savoir plus</a>');

    //Belvédère de la Source
    var marker = L.marker([45.681867, 5.825781],{icon: iconVue}).addTo(map);
    marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/1598864_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Situé tout près de l\'Hôtel de la Source sur la route du col du Chat, le belvédère vous offre une vue panoramique sur les lacs de St Jean de Chevelu, la montagne de la Charvaz, le Mont Tournier et les montagnes de l\'Ain dont le Colombier.<a href="https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/belvedere-de-la-source-saint-jean-de-chevelu/" title="Google">En savoir plus</a>');

    //Belvédère de la Chapelle St Romain à Jongieux
    var marker = L.marker([45.728854, 5.786568],{icon: iconVue}).addTo(map);
    marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/4941234_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Laissez-vous surprendre par le paysage qui se dévoile sous vos yeux: tout près le vignoble mais également les méandres du Rhône, la plaine de Yenne et au loin les montagnes de l\'Ain et du Pays du Lac d\'Aiguebelette.<a href="https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/belvedere-de-la-chapelle-st-romain-a-jongieux-jongieux/" title="Google">En savoir plus</a>');

    //Belvèdère de St-Alban-de-Montbel sur le Lac d'Aiguebelette
    var marker = L.marker([45.550915, 5.784484],{icon: iconVue}).addTo(map);
    marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/3450640_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Du chef-lieu du petit village de St-Alban-de-Montbel dont l\'église surplombe majestueusement le lac, le panorama s\'ouvre à vous sur le Sud du Lac d\'Aiguebelette, ses îles, roselières, petites maisons avec hangars à bateaux et la Montagne de l\'Epine.<a href="https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/belvedere-de-st-alban-de-montbel-sur-le-lac-daiguebelette-saint-alban-de-montbel/" title="Google">En savoir plus</a>');

    //Belvédère du Site des Fils
    var marker = L.marker([45.632592, 5.688373],{icon: iconVue}).addTo(map);
    marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/3450762_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Le site des Fils offre un panorama à couper le souffle ! C\'est depuis une falaise de 500m de haut que le visiteur découvre les méandres du Rhône, sauvage et canalisé. La table de lecture livre les noms des charmants villages qui bordent le Fleuve-Roi.<a class="buttonPop" href="https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/belvedere-du-site-des-fils-saint-maurice-de-rotherens/" title="Google">En savoir plus</a>');







  //     //Itinéraires Raquettes sur le Mont de l'Epine
  //     var marker = L.marker([45.616275, 5.803802]).addTo(map);
  //     marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/5028324_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Profitez des joies de la raquette à proximité de Yenne ! 3 itinéraires ont été balisés au départ du stade de neige de Verthemex. Situés entre 1000 et 1500m d\'altitude dans une ambiance forestière, ils vous guideront vers des points de vue remarquables.<a href="https://www.pays-lac-aiguebelette.com/loisir/itineraires-raquettes-sur-le-mont-de-lepine-verthemex/" title="Google">En savoir plus</a>'); 

  //      //Itinéraires Raquettes sur le Mont de l'Epine
  //      var marker = L.marker([45.616275, 5.803802]).addTo(map);
  //      marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/5028324_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Profitez des joies de la raquette à proximité de Yenne ! 3 itinéraires ont été balisés au départ du stade de neige de Verthemex. Situés entre 1000 et 1500m d\'altitude dans une ambiance forestière, ils vous guideront vers des points de vue remarquables.<a href="https://www.pays-lac-aiguebelette.com/loisir/itineraires-raquettes-sur-le-mont-de-lepine-verthemex/" title="Google">En savoir plus</a>'); 

  //       //Itinéraires Raquettes sur le Mont de l'Epine
  //       var marker = L.marker([45.616275, 5.803802]).addTo(map);
  //    marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/5028324_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Profitez des joies de la raquette à proximité de Yenne ! 3 itinéraires ont été balisés au départ du stade de neige de Verthemex. Situés entre 1000 et 1500m d\'altitude dans une ambiance forestière, ils vous guideront vers des points de vue remarquables.<a href="https://www.pays-lac-aiguebelette.com/loisir/itineraires-raquettes-sur-le-mont-de-lepine-verthemex/" title="Google">En savoir plus</a>');

  //     //Itinéraires Raquettes sur le Mont de l'Epine
  //     var marker = L.marker([45.616275, 5.803802]).addTo(map);
  //     marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/5028324_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Profitez des joies de la raquette à proximité de Yenne ! 3 itinéraires ont été balisés au départ du stade de neige de Verthemex. Situés entre 1000 et 1500m d\'altitude dans une ambiance forestière, ils vous guideront vers des points de vue remarquables.<a href="https://www.pays-lac-aiguebelette.com/loisir/itineraires-raquettes-sur-le-mont-de-lepine-verthemex/" title="Google">En savoir plus</a>'); 

  //      //Itinéraires Raquettes sur le Mont de l'Epine
  //      var marker = L.marker([45.616275, 5.803802]).addTo(map);
  //      marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/5028324_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Profitez des joies de la raquette à proximité de Yenne ! 3 itinéraires ont été balisés au départ du stade de neige de Verthemex. Situés entre 1000 et 1500m d\'altitude dans une ambiance forestière, ils vous guideront vers des points de vue remarquables.<a href="https://www.pays-lac-aiguebelette.com/loisir/itineraires-raquettes-sur-le-mont-de-lepine-verthemex/" title="Google">En savoir plus</a>'); 

  //       //Itinéraires Raquettes sur le Mont de l'Epine
  //       var marker = L.marker([45.616275, 5.803802]).addTo(map);
  //    marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/5028324_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Profitez des joies de la raquette à proximité de Yenne ! 3 itinéraires ont été balisés au départ du stade de neige de Verthemex. Situés entre 1000 et 1500m d\'altitude dans une ambiance forestière, ils vous guideront vers des points de vue remarquables.<a href="https://www.pays-lac-aiguebelette.com/loisir/itineraires-raquettes-sur-le-mont-de-lepine-verthemex/" title="Google">En savoir plus</a>'); 

  //     //Itinéraires Raquettes sur le Mont de l'Epine
  //     var marker = L.marker([45.616275, 5.803802]).addTo(map);
  //     marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/5028324_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Profitez des joies de la raquette à proximité de Yenne ! 3 itinéraires ont été balisés au départ du stade de neige de Verthemex. Situés entre 1000 et 1500m d\'altitude dans une ambiance forestière, ils vous guideront vers des points de vue remarquables.<a href="https://www.pays-lac-aiguebelette.com/loisir/itineraires-raquettes-sur-le-mont-de-lepine-verthemex/" title="Google">En savoir plus</a>'); 

  //      //Itinéraires Raquettes sur le Mont de l'Epine
  //      var marker = L.marker([45.616275, 5.803802]).addTo(map);
  //      marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/5028324_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Profitez des joies de la raquette à proximité de Yenne ! 3 itinéraires ont été balisés au départ du stade de neige de Verthemex. Situés entre 1000 et 1500m d\'altitude dans une ambiance forestière, ils vous guideront vers des points de vue remarquables.<a href="https://www.pays-lac-aiguebelette.com/loisir/itineraires-raquettes-sur-le-mont-de-lepine-verthemex/" title="Google">En savoir plus</a>'); 

  //       //Itinéraires Raquettes sur le Mont de l'Epine
  //       var marker = L.marker([45.616275, 5.803802]).addTo(map);
  //    marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/5028324_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Profitez des joies de la raquette à proximité de Yenne ! 3 itinéraires ont été balisés au départ du stade de neige de Verthemex. Situés entre 1000 et 1500m d\'altitude dans une ambiance forestière, ils vous guideront vers des points de vue remarquables.<a href="https://www.pays-lac-aiguebelette.com/loisir/itineraires-raquettes-sur-le-mont-de-lepine-verthemex/" title="Google">En savoir plus</a>'); 
  









//   function go() {
//    map = L.map("mymap").setView([47, 2.424], 6);
//    var lyrMaps = L.geoportalLayer.WMTS({
//        layer: "GEOGRAPHICALGRIDSYSTEMS.MAPS",
//    }, { // leafletParams
//        opacity: 0.7
//    });
//    map.addLayer(lyrMaps) ;
//    var routeCtrl = L.geoportalControl.Route({
//    });
//   map.addControl(routeCtrl);

// }

// Gp.Services.getConfig({
//    apiKey : "7yk0tjvpwtigz2vo8jhpu5nt",
//    onSuccess : go
// }) ;

// var infoDiv= document.getElementById("info") ;
// infoDiv.innerHTML= "<p> Extension Leaflet version "+Gp.leafletExtVersion+" ("+Gp.leafletExtDate+")</p>" ;










//function that retrieves the coordinates and the name of the car parks
// function loadCoordsAndName(adress, callback) {
//    fetch(adress)
//        .then(response => {
//            return response.json();
//        })
//        .then(json => {
//            let data = json;
//            let i = 0;
//            let arrayObjects = data.records;
//            arrayObjects.forEach(object => {
//                arrayObjects[i] = object;
//                let arrayCoords = arrayObjects[i].geometry.coordinates;
//                let nameCarPark = arrayObjects[i].fields.nom_park;
//                callback(arrayCoords[1], arrayCoords[0], nameCarPark);
//            });
//        });
// }


// //function that creates markers and popups
// function makeMarkersAndPopup(latitude, longitude, nameCarPark) {
//    arrayMarkers[numberMarker] = L.marker([latitude, longitude]).addTo(myMap);
//    arrayMarkers[numberMarker].bindPopup(nameCarPark);
//    arrayNamesCarPark[numberCarPark]
//    numberMarker++;
// }


// loadCoordsAndName(urlApiCarParks, makeMarkersAndPopup);




//   fetch('https://donnees.grandchambery.fr/explore/dataset/arrets-et-horaires-theoriques-bus/export/arrets-et-horaires-theoriques-bus.json', {mode: 'no-cors'})
//   .then((resp) => resp.json())
//   .then(function(response) {
//     return response.text();
    
//   })
//   .then(function(data) {
//    // for (let i = 0; i < data.length; i++) {
//    //    L.marker(response[i].fields.coordonnees_gps,{icon: iconParking})
//    //      .bindPopup()
//    //      .addTo(map);
        
//    //  };
//    console.log(data);
//   });
  
  




let iconParking = new L.Icon({
   iconUrl: '../../../src/icons/Templatic-map-icons/automotive.png',
   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
   iconSize: [25, 35],
   iconAnchor: [12, 41],
   popupAnchor: [1, -34],
   shadowSize: [41, 41]
 });


let data = [{
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "061807154b6eac05b5fdf3fa38b5b160e6446edf",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.564715, 5.915715],
 "tel": "0 8100 77 275",
 "nom_park": "Parking \nCh\u00e2teau",
 "capacite_int2": 644,
 "hauteur_passage": "1,90 m",
 "delegataire": "Q-Park",
 "adresse": "79 faubourg Mach\u00e9",
 "site_delegataire": "https://www.q-park-resa.fr/fr/parking/chambery/chateau-266",
 "secteur": "Centre ville",
 "acces": "24 h / 24",
 "mail": "www.q-park-resa.fr/fr/aide/service-clients-france.html",
 "capacite": "644 places",
 "situation": "Acc\u00e8s rapide au centre ancien par le passage rue Jean-Pierre Veyrat ou la rue Tr\u00e9sorerie",
 "type_park": "Ouvrage",
 "public": "Abonn\u00e9s et visiteurs",
 "capacite_int": 644
},
"geometry": {
 "type": "Point",
 "coordinates": [5.915715, 45.564715]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "ebdce5243699c7f971203f670eff9050e47f04ab",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.563427, 5.922703],
 "tel": "04 79 60 09 93",
 "nom_park": "Parking Curial",
 "capacite_int2": 244,
 "hauteur_passage": "1,90 m",
 "delegataire": "Indigo",
 "adresse": "11 Place Monge",
 "site_delegataire": "https://fr.parkindigo.com/parking/curial-monge-73010200",
 "secteur": "Centre Ville",
 "acces": "24 h / 24",
 "mail": "https://www.group-indigo.com/fr/contact/",
 "capacite": "244 places",
 "situation": "\u00c0 proximit\u00e9 du centre historique et du c\u0153ur de la vie nocturne chamb\u00e9rienne",
 "type_park": "Ouvrage",
 "public": "Abonn\u00e9s et visiteurs",
 "capacite_int": 244
},
"geometry": {
 "type": "Point",
 "coordinates": [5.922703, 45.563427]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "c09af925b12384e40a9c0ed0e8fd607a2901492f",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.564169, 5.912086],
 "tel": "0 8100 77 275",
 "nom_park": "Parking \nH\u00f4pital P3",
 "capacite_int2": 48,
 "hauteur_passage": "1,90 m",
 "delegataire": "Q-Park",
 "adresse": "568 avenue de Lyon",
 "site_delegataire": "https://www.q-park-resa.fr/fr/parking/chambery/hopital-p1-82.html",
 "secteur": "Entr\u00e9e de ville",
 "acces": "24 h / 24",
 "mail": "www.q-park-resa.fr/fr/aide/service-clients-france.html",
 "capacite": "48 places (Urgences)",
 "situation": "Situ\u00e9 en face des Urgences de l'H\u00f4pital",
 "type_park": "Ouvrage",
 "public": "Visiteurs",
 "capacite_int": 48
},
"geometry": {
 "type": "Point",
 "coordinates": [5.912086, 45.564169]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "05303e75b795d60ae59229c593903e7f852545c3",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.56644, 5.920988],
 "tel": "04 79 60 09 93",
 "nom_park": "Parking \nH\u00f4tel de Ville",
 "capacite_int2": 243,
 "hauteur_passage": "1,90 m",
 "delegataire": "Indigo",
 "adresse": "Place de l\u2019H\u00f4tel de Ville",
 "site_delegataire": "https://fr.parkindigo.com/parking/parking-hotel-de-ville-73010100",
 "secteur": "Hyper-centre",
 "acces": "24 h / 24",
 "mail": "https://www.group-indigo.com/fr/contact/",
 "capacite": "243 places",
 "situation": "Le plus central des parkings \u00a0de la ville",
 "type_park": "Ouvrage",
 "public": "Abonn\u00e9s et visiteurs",
 "capacite_int": 243
},
"geometry": {
 "type": "Point",
 "coordinates": [5.920988, 45.56644]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "38a6a747847d16656cf1e6cb3418e4ede84fb97c",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.562553, 5.925814],
 "tel": "0 8100 77 275",
 "nom_park": "Enclos Barbot",
 "capacite_int2": 58,
 "hauteur_passage": "illimit\u00e9",
 "delegataire": "Q-Park",
 "adresse": "55 Rue Andr\u00e9 Jacques",
 "site_delegataire": "https://www.q-park-resa.fr/fr/parking/chambery/barbot-269.html",
 "secteur": "Centre ville",
 "acces": "24 h / 24",
 "mail": "www.q-park-resa.fr/fr/aide/service-clients-france.html",
 "capacite": "58 places",
 "situation": "Tout proche du secteur Curial",
 "type_park": "Enclos",
 "public": "Abonn\u00e9s et Visiteurs",
 "capacite_int": 58
},
"geometry": {
 "type": "Point",
 "coordinates": [5.925814, 45.562553]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "f6f95cb02ac9e4fb10d64960dd9bdc001b3dfe9c",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.572243, 5.920963],
 "tel": "0 8100 77 275",
 "nom_park": "Enclos Cassine 1",
 "capacite_int2": 104,
 "hauteur_passage": "illimit\u00e9",
 "delegataire": "Q-Park",
 "adresse": "268 Chemin de la Cassine",
 "site_delegataire": "https://www.q-park-resa.fr/fr/parking/chambery/cassine-265.html",
 "secteur": "Entr\u00e9e de ville",
 "acces": "24 h / 24",
 "mail": "www.q-park-resa.fr/fr/aide/service-clients-france.html",
 "capacite": "104 places",
 "situation": "Acc\u00e8s direct par la Voie Rapide Urbaine (sortie Cassine)\nAcc\u00e8s pi\u00e9ton \u00e0 la gare SNCF et \u00e0 son quartier par la passerelle au-dessus des voies.",
 "type_park": "Enclos",
 "public": "Visiteurs",
 "capacite_int": 104
},
"geometry": {
 "type": "Point",
 "coordinates": [5.920963, 45.572243]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "2d1a0eb852864995eab2e919e7828f881dfce169",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.573468, 5.921036],
 "tel": "0 8100 77 275",
 "nom_park": "Enclos Cassine 2",
 "capacite_int2": 241,
 "hauteur_passage": "illimit\u00e9",
 "delegataire": "Q-Park",
 "adresse": "425 Chemin de la Cassine",
 "site_delegataire": "https://www.q-park-resa.fr/fr/parking/chambery/cassine-2-285.html",
 "secteur": "Entr\u00e9e de ville",
 "acces": "24 h / 24",
 "mail": "www.q-park-resa.fr/fr/aide/service-clients-france.html",
 "capacite": "241 places",
 "situation": "Acc\u00e8s direct par la Voie Rapide Urbaine (sortie Cassine) \nAcc\u00e8s pi\u00e9ton \u00e0 la gare SNCF et \u00e0 son quartier par la passerelle au-dessus des voies.  \nAbonnement 24 h / 24  - 7 jours/7 : 40 \u20ac",
 "type_park": "Enclos",
 "public": "Abonn\u00e9s et visiteurs",
 "capacite_int": 241
},
"geometry": {
 "type": "Point",
 "coordinates": [5.921036, 45.573468]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "d7a5441cb597337eda3df7390687ac8991646d48",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.563392, 5.922852],
 "tel": "0 8100 77 275",
 "nom_park": "Enclos Europe",
 "capacite_int2": 149,
 "hauteur_passage": "illimit\u00e9",
 "delegataire": "Q-Park",
 "adresse": "Esplanade de l'Europe",
 "site_delegataire": "https://www.q-park-resa.fr/fr/parking/chambery/europe-268.html",
 "secteur": "Centre ville",
 "acces": "24 h / 24",
 "mail": "www.q-park-resa.fr/fr/aide/service-clients-france.html",
 "capacite": "149 places",
 "situation": "Au coeur de la ville, proche des commerces, restaurants, bars, \u00e9tablissements de nuits, \u00e9quipements culturels...",
 "type_park": "Enclos",
 "public": "Visiteurs",
 "capacite_int": 149
},
"geometry": {
 "type": "Point",
 "coordinates": [5.922852, 45.563392]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "d54dbcfd5f4a3fab664b19d2aa70ccd0f69bfb50",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.569917, 5.918174],
 "tel": "0 8100 77 275",
 "nom_park": "Enclos Roissard",
 "capacite_int2": 149,
 "hauteur_passage": "2,20 m",
 "delegataire": "Q-Park",
 "adresse": "Quai Roissard",
 "site_delegataire": "https://www.q-park-resa.fr/fr/parking/chambery/roissard-271.html",
 "secteur": "Centre ville",
 "acces": "24 h / 24",
 "mail": "www.q-park-resa.fr/fr/aide/service-clients-france.html",
 "capacite": "149 places",
 "situation": "Id\u00e9alement situ\u00e9 \u00e0 proximit\u00e9 des gares (routi\u00e8re et SNCF) et du centre ville",
 "type_park": "Enclos",
 "public": "Abonn\u00e9s et visiteurs",
 "capacite_int": 149
},
"geometry": {
 "type": "Point",
 "coordinates": [5.918174, 45.569917]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "72573c142f3e45f388dce856fe870e9c83101fa2",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.572237, 5.916308],
 "tel": "0 8100 77 275",
 "nom_park": "Enclos Verdun",
 "capacite_int2": 136,
 "hauteur_passage": "illimit\u00e9",
 "delegataire": "Q-Park",
 "adresse": "Quai de Verdun",
 "site_delegataire": "https://www.q-park-resa.fr/fr/parking/chambery/verdun-272.html",
 "secteur": "Entr\u00e9e de ville",
 "acces": "24 h / 24",
 "mail": "www.q-park-resa.fr/fr/aide/service-clients-france.html",
 "capacite": "136 places",
 "situation": "Parking s\u00e9curis\u00e9, situ\u00e9 \u00e0 deux pas de la gare SNCF de Chamb\u00e9ry - Challes-les-Eaux et de la gare routi\u00e8re.\nBien ombrag\u00e9",
 "type_park": "Enclos",
 "public": "Abonn\u00e9s et visiteurs",
 "capacite_int": 136
},
"geometry": {
 "type": "Point",
 "coordinates": [5.916308, 45.572237]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "e27338aff4c93a04b703617862f1903126ab0abf",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.568465, 5.924333],
 "tel": "0 8100 77 275",
 "nom_park": "Parking \nDucs",
 "capacite_int2": 64,
 "hauteur_passage": "1,90 m",
 "delegataire": "Q-Park",
 "adresse": "1 boulevard de Lemenc",
 "site_delegataire": "http://www.q-park-resa.fr/fr/parking/chambery/ducs-273.html",
 "secteur": "Entr\u00e9e de ville",
 "acces": "24 h / 24",
 "mail": "www.q-park-resa.fr/fr/aide/service-clients-france.html",
 "capacite": "64 places",
 "situation": "Acc\u00e8s par le Boulevard de Lemenc ou par la Voie Rapide Urbaine - Sortie Cassine",
 "type_park": "Ouvrage",
 "public": "Abonn\u00e9s",
 "capacite_int": 64
},
"geometry": {
 "type": "Point",
 "coordinates": [5.924333, 45.568465]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "0291d0a47490f4d6d8913f83405adeeaa73916d9",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.563814, 5.926434],
 "tel": "0 8100 77 275",
 "nom_park": "Enclos Man\u00e8ge",
 "capacite_int2": 84,
 "hauteur_passage": "illimit\u00e9",
 "delegataire": "Q-Park",
 "adresse": "Rue de la R\u00e9publique",
 "site_delegataire": "https://www.q-park-resa.fr/fr/parking/chambery/manege-270.html",
 "secteur": "Centre ville",
 "acces": "24 h / 24",
 "mail": "www.q-park-resa.fr/fr/aide/service-clients-france.html",
 "capacite": "84 places",
 "situation": "Tout proche du secteur Curial\nEn face du centre de congr\u00e8s",
 "type_park": "Enclos",
 "public": "Abonn\u00e9s et visiteurs",
 "capacite_int": 84
},
"geometry": {
 "type": "Point",
 "coordinates": [5.926434, 45.563814]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "469183243fca576a24b407f428d2c4a74c20464d",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.562395, 5.92602],
 "tel": "0 8100 77 275",
 "nom_park": "Parking \nFalaise",
 "capacite_int2": 495,
 "hauteur_passage": "1,90 m",
 "delegataire": "Q-Park",
 "adresse": "122 rue Andr\u00e9 Jacques",
 "site_delegataire": "https://www.q-park-resa.fr/fr/parking/chambery/falaise-267.html",
 "secteur": "Entr\u00e9e de ville",
 "acces": "24 h / 24",
 "mail": "www.q-park-resa.fr/fr/aide/service-clients-france.html",
 "capacite": "495 places dont 36 boxes ferm\u00e9s",
 "situation": "Situ\u00e9 \u00e0 5 mn \u00e0 pied du centre-ville. Facile d\u2019acc\u00e8s en venant du sud de l\u2019agglom\u00e9ration (Voie Rapide urbaine sortie Chamb\u00e9ry centre). Le moins cher de la ville",
 "type_park": "Ouvrage",
 "public": "Abonn\u00e9s et visiteurs",
 "capacite_int": 495
},
"geometry": {
 "type": "Point",
 "coordinates": [5.92602, 45.562395]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "c8f1322c1749b07e618a34269dbe5f5dea7cbdf9",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.566699, 5.918468],
 "tel": "04 79 60 54 35",
 "nom_park": "Parking \nHalles",
 "capacite_int2": 283,
 "hauteur_passage": "2,00 m",
 "delegataire": "SAGS",
 "adresse": "Rue Derri\u00e8re les Murs",
 "site_delegataire": "http://www.sags.fr/parking-chambery/les-halles-172.html",
 "secteur": "Hyper-centre",
 "acces": "Lun-Dim\n6h30-1h00",
 "mail": "http://www.sags.fr/contact/index.php",
 "capacite": "283 places",
 "situation": "Situ\u00e9 en hypercentre dans l\u2019\u00eelot commercial des Halles avec acc\u00e8s direct au march\u00e9, au Monoprix et au cin\u00e9ma Path\u00e9 Gaumont par ascenseur",
 "type_park": "Ouvrage",
 "public": "Abonn\u00e9s et visiteurs",
 "capacite_int": 283
},
"geometry": {
 "type": "Point",
 "coordinates": [5.918468, 45.566699]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "0ba4e2090ec05d0c9b2e99ea3d9b6771683c29f7",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.568588, 5.919393],
 "tel": "04 79 60 09 93",
 "nom_park": "Parking Palais de Justice",
 "capacite_int2": 400,
 "hauteur_passage": "1,90 m",
 "delegataire": "Indigo",
 "adresse": "2 place du Palais de Justice",
 "site_delegataire": "https://fr.parkindigo.com/parking/parking-palais-de-justice-73010700",
 "secteur": "Huper-centre",
 "acces": "24 h / 24",
 "mail": "https://www.group-indigo.com/fr/contact/",
 "capacite": "400 places",
 "situation": "Parc tr\u00e8s proche du centre pi\u00e9ton, appr\u00e9ci\u00e9 pour sa qualit\u00e9 architecturale et sa commodit\u00e9 de stationnement",
 "type_park": "Ouvrage",
 "public": "Abonn\u00e9s et visiteurs",
 "capacite_int": 400
},
"geometry": {
 "type": "Point",
 "coordinates": [5.919393, 45.568588]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "468f95e8aa288c8133ae308581150e4c7fc5cc3d",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.56258, 5.912399],
 "tel": "0 8100 77 275",
 "nom_park": "Parking \nH\u00f4pital P1",
 "capacite_int2": 259,
 "hauteur_passage": "1,95 m",
 "delegataire": "Q-Park",
 "adresse": "568 avenue de Lyon",
 "site_delegataire": "https://www.q-park-resa.fr/fr/parking/chambery/hopital-p1-82.html",
 "secteur": "Entr\u00e9e de ville",
 "acces": "Lun-Dim\n5h00-22h00\nSortie 24h/24h",
 "mail": "www.q-park-resa.fr/fr/aide/service-clients-france.html",
 "capacite": "259 places",
 "situation": "Situ\u00e9 en entr\u00e9e de ville sous le Centre Hospitalier",
 "type_park": "Ouvrage",
 "public": "Abonn\u00e9s et visiteurs",
 "capacite_int": 259
},
"geometry": {
 "type": "Point",
 "coordinates": [5.912399, 45.56258]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}, {
"datasetid": "parkings-enclos-ou-ouvrage-a-chambery",
"recordid": "2cb05adced33885ffd96da1ab3ac3493a383eb07",
"fields": {
 "remarque": "Payant",
 "commune": "73000 Chamb\u00e9ry",
 "coordonnees_gps": [45.572158, 5.918983],
 "tel": "04 79 69 53 33 ou \n0 825 88 88 26",
 "nom_park": "Parking \nGare",
 "capacite_int2": 220,
 "hauteur_passage": "1,85 m",
 "delegataire": "Effia",
 "adresse": "90 avenue de la Boisse",
 "site_delegataire": "www.effia.com",
 "secteur": "Entr\u00e9e de ville",
 "acces": "24 h / 24",
 "mail": "https://www.effia.com/user/contact",
 "capacite": "220 places",
 "situation": "Situ\u00e9 au plus pr\u00e8s de la gare. Acc\u00e8s par la Voie Rapide Urbaine - Sortie Cassine",
 "type_park": "Ouvrage",
 "public": "Abonn\u00e9s et visiteurs",
 "capacite_int": 220
},
"geometry": {
 "type": "Point",
 "coordinates": [5.918983, 45.572158]
},
"record_timestamp": "2018-12-18T10:56:42+01:00"
}]




for (let i = 0; i < data.length; i++) {
L.marker(data[i].fields.coordonnees_gps,{icon: iconParking})
 .bindPopup()
 .addTo(map);
 
};







  
}





//Géolocalisation

// function geo() {
//    map.locate({setView: true, maxZoom: 10});
   
//    function onLocationFound(e) {
//        var radius = e.accuracy / 2;
   
//        L.marker(e.latlng).addTo(map)
//            .bindPopup("Vous êtes dans " + radius + " mètres de ce point").openPopup();
   
//        L.circle(e.latlng, radius).addTo(map);
//    }
   
//    map.on('locationfound', onLocationFound);
//    }
   

   function initElement() {
      let p = document.getElementById("geolocalisation");
      p.onclick = currentLocation;
   }
   
   function currentLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((function (position) {
              let marker = L.marker([position.coords.latitude, position.coords.longitude], {
                 
                  //icon: myicon
              }).addTo(mymap);
              marker.bindPopup("Ma position :<br> Latitude : " + position.coords.latitude + ',<br>Longitude ' + position.coords.longitude).openPopup();
              //center: new google.maps.latLng(lat, lng)
          }));
      } else {
          alert("La géolocalisation n'est pas supportée par ce navigateur.");
      }
   }
   
   





// window.onload = function () {
//    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
//    init();
 
//  };
 