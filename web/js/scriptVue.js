//icons
let iconVue = new L.Icon({
    iconUrl: '../../src/icons/Templatic-map-icons/photography.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 35],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  
  //Array Aiguebelette
  let coordinate =[[45.593924, 5.727414], [45.504404, 5.701581], [45.616275, 5.803802], [45.628911, 5.796723], [45.659763, 5.821366], [45.681867, 5.825781], [45.728854, 5.786568], [45.550915, 5.784484], [45.632592, 5.688373]];
let title = ["Belvédère des Chenevières", "Point de vue de Saint Albin de Vaulserre", "Itinéraires Raquettes sur le Mont de l'Epine", "Table d'orientation de la Vierge de Vacheresse", "Table d'orientation du Relais du Chat", "Belvédère de la Source", "Belvédère de la Chapelle St Romain à Jongieux", "Belvèdère de St-Alban-de-Montbel sur le Lac d'Aiguebelette", "Belvédère du Site des Fils"];
let src = ["https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/30917_apidae-objet-grid.jpg", "https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/2180463_apidae-objet-grid.jpg", "https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/5028324_apidae-objet-grid.jpg", "https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/4020133_apidae-objet-grid.jpg", "https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/4932981_apidae-objet-grid.jpg", "https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/1598864_apidae-objet-grid.jpg", "https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/4941234_apidae-objet-grid.jpg", "https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/3450640_apidae-objet-grid.jpg", "https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/3450762_apidae-objet-grid.jpg"];
let desc = ["C'est depuis le village de Ste Marie d'Alvey que l'on peut bénéficier d'un superbe point de vue sur la plaine du Guiers, le Pays du Lac d'Aiguebelette, l'Isère. Une table d'orientation permet de comprendre ce paysage à 180°.", "Bénéficiez, depuis le village de St Albin de Vaulserre, d'un superbe point de vue sur la vallée du Guiers et les massifs pré Alpins. Une table d'orientation permet de comprendre ce paysage à 120°.", "Profitez des joies de la raquette à proximité de Yenne ! 3 itinéraires ont été balisés au départ du stade de neige de Verthemex. Situés entre 1000 et 1500m d'altitude dans une ambiance forestière, ils vous guideront vers des points de vue remarquables.", "Site incontournable pour les amateurs d'excursions de pleine nature: vue panoramique sur le canton de Yenne et de Novalaise.Lieu idéal pour apprécier un coucher de soleil.", "Laissez-vous séduire par le point de vue le plus haut du canton de Yenne dévoilant le lac du Bourget et de nombreux massifs alpins dont le Mont Blanc.", "Situé tout près de l'Hôtel de la Source sur la route du col du Chat, le belvédère vous offre une vue panoramique sur les lacs de St Jean de Chevelu, la montagne de la Charvaz, le Mont Tournier et les montagnes de l'Ain dont le Colombier.", "Laissez-vous surprendre par le paysage qui se dévoile sous vos yeux: tout près le vignoble mais également les méandres du Rhône, la plaine de Yenne et au loin les montagnes de l'Ain et du Pays du Lac d'Aiguebelette.", "Du chef-lieu du petit village de St-Alban-de-Montbel dont l'église surplombe majestueusement le lac, le panorama s'ouvre à vous sur le Sud du Lac d'Aiguebelette, ses îles, roselières, petites maisons avec hangars à bateaux et la Montagne de l'Epine.", "Le site des Fils offre un panorama à couper le souffle ! C'est depuis une falaise de 500m de haut que le visiteur découvre les méandres du Rhône, sauvage et canalisé. La table de lecture livre les noms des charmants villages qui bordent le Fleuve-Roi."];
let href = ["https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/belvedere-des-chenevieres-sainte-marie-dalvey/", "https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/point-de-vue-de-saint-albin-de-vaulserre-saint-albin-de-vaulserre/","https://www.pays-lac-aiguebelette.com/loisir/itineraires-raquettes-sur-le-mont-de-lepine-verthemex/", "https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/table-dorientation-de-la-vierge-de-vacheresse-verthemex/", "https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/table-dorientation-du-relais-du-chat-saint-paul-sur-yenne/", "https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/belvedere-de-la-source-saint-jean-de-chevelu/", "https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/belvedere-de-la-chapelle-st-romain-a-jongieux-jongieux/", "https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/belvedere-de-st-alban-de-montbel-sur-le-lac-daiguebelette-saint-alban-de-montbel/", "https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/belvedere-du-site-des-fils-saint-maurice-de-rotherens/"];
  //ajou marker avec boucle des vues de aiguebelette
function affiche() {
  var markerClusters = L.markerClusterGroup();
  for (let i = 0; i < href.length; i++) {
    let marker = L.marker(coordinate[i], {icon: iconVue});
    marker.bindPopup(title[i]+'<img src='+src[i]+' height="100px"/></br>' + desc[i]+ '<a href='+href[i]+'title="Google">En savoir plus</a>');
    markerClusters.addLayer( marker );
  }
  map.addLayer( markerClusters );
}


//Array Chambery
let coordinateChambery =[[45.775480, 5.872626], [45.555196, 5.800515], [45.918186, 6.870457], [46.162638, 6.189288], [45.922424, 6.875253], [45.688100, 6.624178], [45.985245, 6.901797], [45.54870, 6.74771], [45.1287730, 6.3375660]];
let titleChambery = ["Belvédère de la Chambotte : paradis avec vue", "Le lac d’Aiguebelette", "Téléphérique de l'Aiguille du Midi : la montagne à vos pieds", "Téléphérique du Salève : la magie des hauteurs", "La mer de glace", "Le barrage de Roselend", "Le lac des Chéserys", "Le col de la Forclaz", "Les Aiguilles d'Arves"];
let srcChambery = ["https://www.savoie-mont-blanc.com/var/smb/storage/images/media/images/decouvrir/en-douceur/panorama-sur-le-lac-du-bourget-landing/13105-6-fre-FR/Panorama-sur-le-lac-du-Bourget-landing_format_115x80.jpg", "https://www.savoie-mont-blanc.com/var/smb/storage/images/media/images/visites-et-decouvertes/nature/lac-d-aiguebelette-vue-depuis-le-decollage-parapente/434933-1-fre-FR/Lac-d-Aiguebelette-vue-depuis-le-decollage-parapente_format_115x80.jpg", "https://www.savoie-mont-blanc.com/var/smb/storage/images/media/images/visites-et-decouvertes/nature/aiguille-du-midi-and-the-mont-blanc/903713-1-fre-FR/Aiguille-du-midi-and-the-Mont-Blanc_format_115x80.jpg", "https://www.savoie-mont-blanc.com/var/smb/storage/images/media/images/visites-et-decouvertes/a-visiter/telepherique-du-saleve/223174-1-fre-FR/Telepherique-du-Saleve_format_115x80.jpg", "https://www.savoie-mont-blanc.com/var/smb/storage/images/media/images/visites-et-decouvertes/nature/vue-sur-la-mer-de-glace-depuis-la-gare-du-montenvers-chamonix/225683-1-fre-FR/Vue-sur-la-mer-de-Glace-depuis-la-gare-du-Montenvers-Chamonix_format_115x80.jpg", "https://www.savoie-mont-blanc.com/var/smb/storage/images/media/images/visites-et-decouvertes/nature/panorama-sur-le-lac-de-roselend/153538-1-fre-FR/Panorama-sur-le-lac-de-Roselend_format_115x80.jpg", "https://www.savoie-mont-blanc.com/var/smb/storage/images/media/images/visites-et-decouvertes/nature/le-lac-des-cheserys-chamonix/16212-4-fre-FR/Le-lac-des-cheserys-Chamonix_format_115x80.jpg", "https://www.savoie-mont-blanc.com/var/smb/storage/images/media/images/decouvrir/adrenaline/parapente-au-col-de-la-forclaz-lac-d-annecy/153494-12-fre-FR/Parapente-au-col-de-la-Forclaz-Lac-d-Annecy_format_115x80.jpg", "https://www.savoie-mont-blanc.com/var/smb/storage/images/media/images/visites-et-decouvertes/nature/les-aiguilles-d-arves-depuis-le-lac-guichard/60681-1-fre-FR/Les-Aiguilles-d-Arves-depuis-le-lac-Guichard_format_115x80.jpg"];
let descChambery = ["Belvédère de la Chambotte : paradis avec vueC'est l'un des plus beaux points de vue sur le lac du Bourget et Aix-les-Bains. A droite, la Chautagne, le Grand Colombier et le canal de Savières, paradis bien connu des amateurs de plaisance. Au centre, la majestueuse abbaye d'Hautecombe. Sur la gauche, les massifs de la Chartreuse et Belledonne donnant parfois au lac des allures de fjord.Le belvédère de la Chambotte fut construit en 1882. Parmi ses illustres visiteurs, une certaine Victoria, reine d'Angleterre.", "Le lac d’AiguebeletteSitué à 360 m d'altitude, le lac d'Aiguebelette est, comme l'écrivait Henry Bordeaux une \"perle d'émeraude enchâssée dans un écrin de montagnes\". Site Natura 2000, le lac possède un écosystème remarquable et des zones naturelles protégées. C’est un lieu idéal pour la baignade et la pratique des sports et loisirs de pleine nature.Pour accéder au belvédère, prendre la direction col de l'Epine et suivre le panneau décollage parapente.", "Téléphérique de l'Aiguille du Midi : la montagne à vos piedsLe téléphérique le plus haut d'Europe démarre au coeur de Chamonix, à un peu plus de 1 000 mètres d'altitude, puis gravit 2 747 mètres de dénivelé en à peine vingt minutes. Tout en haut, le paradis blanc. Aiguille Verte, mont Rose, Grandes Jorasses, Cervin, mont Blanc...Plusieurs terrasses aménagées offrent une vue à 360 degrés sur les sommets mythiques des Alpes. Le téléphérique de l'Aiguille du Midi est l'un des sites touristiques les plus fréquentés du pays.", "Téléphérique du Salève : la magie des hauteursCinq minutes d'ascension pour un moment de pur bonheur...Créé en 1932, le téléphérique du Salève a hissé plusieurs générations de visiteurs sur les hauteurs de Veyrier. Au sommet, la vue sur Genève, le lac Léman et la chaîne du Mont-Blanc est imprenable.La découverte de la gare, joyau architectural des années trente, impressionne. Plusieurs itinéraires de randonnées sont accessibles à tous.", "La mer de glaceDepuis Chamonix, le célèbre train rouge à crémaillère du Montenvers permet de rejoindre la mer de glace. A l'arrivée, à 1913 m d'altitude, le spectacle est impressionnant. Avec ses 7 km de long pour 200 m d’épaisseur et une largeur qui varie entre 700 et 1950 m, la mer de glace est le plus grand glacier français. Sur place, la visite de la grotte de glace est un incontournable.", "Le barrage de RoselendLe barrage de Roselend est l'un des quatre barrages du Beaufortain. C'est également le plus grand. Accessible depuis Arêches-Beaufort ou depuis Bourg-Saint-Maurice en passant par la vallée des Chapieux, cet ouvrage d'art de 800 m de long et 150 m de haut forme un lac de retenue prisé des pêcheurs et des randonneurs.L'un des plus beaux points de vue se situe au Cormet de Roselend.", "Le lac des ChéserysSept lacs constituent les lacs de Chéserys : deux sont de taille moyenne, les cinq autres sont de taille plus réduite. Situés dans la réserve des Aiguilles Rouges, à proximité de Chamonix, ils offrent un panorama somptueux sur la chaîne du Mont-Blanc.Leur accès est facilité grâce au téléphérique de la Flégère.", "Le col de la ForclazLe Col de la Forclaz (Montmin) – 1150 m - surplombe le lac d’Annecy. Depuis le col, on peut admirer un magnifique panorama sur le lac et la montagne du Semnoz en face. Réputé dans le monde entier pour son site de décollage de vol libre, il permet aux amateurs de sensations fortes de survoler un magnifique territoire.Le col de la Forclaz est également une très belle ascension à faire à vélo.", "Les Aiguilles d'ArvesCes trois sommets très facilement identifiables, dont le plus haut culmine à 3514 m d'altitude, sont emblématiques de la vallée de la Maurienne. Accessibles aux randonneurs, les Aiguilles d'Arves se découvrent également grâce au parcours de la promenade savoyarde de découverte qui serpente dans l'alpage depuis Albiez. On peut également les contempler depuis un lac, comme ici le lac Guichard."];
let hrefChambery = ["https://www.savoie-mont-blanc.com/offre/fiche/belvedere-de-la-chambotte/118035", "https://www.savoie-mont-blanc.com/offre/fiche/lac-d-aiguebelette/115330", "https://www.savoie-mont-blanc.com/offre/fiche/telepherique-de-l-aiguille-du-midi/156953", "https://www.savoie-mont-blanc.com/offre/fiche/telepherique-du-saleve/153601", "https://www.savoie-mont-blanc.com/offre/fiche/mer-de-glace-et-train-du-montenvers/179002", "https://www.savoie-mont-blanc.com/offre/fiche/barrage-et-site-de-roselend/94771", "https://www.savoie-mont-blanc.com/offre/fiche/telepherique-de-la-flegere/156960", "https://www.savoie-mont-blanc.com/offre/fiche/04-belvedere-de-la-forclaz/74768", "https://www.savoie-mont-blanc.com/offre/fiche/les-aiguilles-d-arves/323513"];
  //ajou marker avec boucle des vues de Chambery
function afficheChambery() {
let markerClusters = L.markerClusterGroup();
      for (let i = 0; i < hrefChambery.length; i++) {
let marker = L.marker(coordinateChambery[i], {icon: iconVue});
marker.bindPopup(titleChambery[i]+'</br>'+'<img src='+srcChambery[i]+' height="100px"/></br>' + descChambery[i]+ '<a href='+hrefChambery[i]+'title="Google">En savoir plus</a>');
markerClusters.addLayer( marker );
}
      map.addLayer( markerClusters );
    }













  // //Itinéraires Raquettes sur le Mont de l'Epine
    // var marker = L.marker([45.616275, 5.803802],{icon: iconVue}).addTo(map);
    // marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/5028324_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Profitez des joies de la raquette à proximité de Yenne ! 3 itinéraires ont été balisés au départ du stade de neige de Verthemex. Situés entre 1000 et 1500m d\'altitude dans une ambiance forestière, ils vous guideront vers des points de vue remarquables.<a href="https://www.pays-lac-aiguebelette.com/loisir/itineraires-raquettes-sur-le-mont-de-lepine-verthemex/" title="Google">En savoir plus</a>');

    // //Table d'orientation de la Vierge de Vacheresse
    // var marker = L.marker([45.628911, 5.796723],{icon: iconVue}).addTo(map);
    // marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/4020133_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Site incontournable pour les amateurs d\'excursions de pleine nature: vue panoramique sur le canton de Yenne et de Novalaise. Lieu idéal pour apprécier un coucher de soleil.<a href="https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/table-dorientation-de-la-vierge-de-vacheresse-verthemex/" title="Google">En savoir plus</a>');

    // //Table d'orientation du Relais du Chat
    // var marker = L.marker([45.659763, 5.821366],{icon: iconVue}).addTo(map);
    // marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/4932981_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Laissez-vous séduire par le point de vue le plus haut du canton de Yenne dévoilant le lac du Bourget et de nombreux massifs alpins dont le Mont Blanc.<a href="https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/table-dorientation-du-relais-du-chat-saint-paul-sur-yenne/" title="Google">En savoir plus</a>');

    // //Belvédère de la Source
    // var marker = L.marker([45.681867, 5.825781],{icon: iconVue}).addTo(map);
    // marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/1598864_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Situé tout près de l\'Hôtel de la Source sur la route du col du Chat, le belvédère vous offre une vue panoramique sur les lacs de St Jean de Chevelu, la montagne de la Charvaz, le Mont Tournier et les montagnes de l\'Ain dont le Colombier.<a href="https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/belvedere-de-la-source-saint-jean-de-chevelu/" title="Google">En savoir plus</a>');

    // //Belvédère de la Chapelle St Romain à Jongieux
    // var marker = L.marker([45.728854, 5.786568],{icon: iconVue}).addTo(map);
    // marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/4941234_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Laissez-vous surprendre par le paysage qui se dévoile sous vos yeux: tout près le vignoble mais également les méandres du Rhône, la plaine de Yenne et au loin les montagnes de l\'Ain et du Pays du Lac d\'Aiguebelette.<a href="https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/belvedere-de-la-chapelle-st-romain-a-jongieux-jongieux/" title="Google">En savoir plus</a>');

    // //Belvèdère de St-Alban-de-Montbel sur le Lac d'Aiguebelette
    // var marker = L.marker([45.550915, 5.784484],{icon: iconVue}).addTo(map);
    // marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/3450640_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Du chef-lieu du petit village de St-Alban-de-Montbel dont l\'église surplombe majestueusement le lac, le panorama s\'ouvre à vous sur le Sud du Lac d\'Aiguebelette, ses îles, roselières, petites maisons avec hangars à bateaux et la Montagne de l\'Epine.<a href="https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/belvedere-de-st-alban-de-montbel-sur-le-lac-daiguebelette-saint-alban-de-montbel/" title="Google">En savoir plus</a>');

    // //Belvédère du Site des Fils
    // var marker = L.marker([45.632592, 5.688373],{icon: iconVue}).addTo(map);
    // marker.bindPopup('Itinéraires Raquettes sur le Mont de l\'Epine<img src="https://www.pays-lac-aiguebelette.com/content/themes/altimax/images/cache/apidae/3450762_apidae-objet-grid.jpg" height="150px" width="150px"/></br>Le site des Fils offre un panorama à couper le souffle ! C\'est depuis une falaise de 500m de haut que le visiteur découvre les méandres du Rhône, sauvage et canalisé. La table de lecture livre les noms des charmants villages qui bordent le Fleuve-Roi.<a class="buttonPop" href="https://www.pays-lac-aiguebelette.com/activite-de-pleine-nature/belvedere-du-site-des-fils-saint-maurice-de-rotherens/" title="Google">En savoir plus</a>');

   
     
