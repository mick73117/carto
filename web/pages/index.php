<?php
        $db = new SQLite3('../../data/bddBot.db');
  
        $resultsAiguebelette = $db->query('SELECT * FROM vue INNER JOIN plus ON plus.ID_vue = vue.ID WHERE commune = 1');
        $resultsChambery = $db->query('SELECT * FROM vue INNER JOIN plus ON plus.ID_vue = vue.ID WHERE commune = 2');

        error_reporting(E_ALL);
        ini_set("display_errors", 1);
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="../css/stylesheet.css">
  <!-- bootstrap-->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <!--  Load Leaflet -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>
  <!--Extension cluster-->
 <link rel="stylesheet" type="text/css" href="http://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/0.4.0/MarkerCluster.css" />
  <link rel="stylesheet" type="text/css" href="http://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/0.4.0/MarkerCluster.Default.css" />
  <script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js'></script>
  <script type='text/javascript' src='http://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/0.4.0/leaflet.markercluster.js'></script>
<!--Itinerary-->
  <script src="https://www.mapquestapi.com/sdk/leaflet/v2.2/mq-map.js?key=nhwJdz7W5kO6QlcUXT8gTjVkWqSbz3Tp"></script>
  <script src="https://www.mapquestapi.com/sdk/leaflet/v2.2/mq-routing.js?key=nhwJdz7W5kO6QlcUXT8gTjVkWqSbz3Tp"></script>


  <script src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.3.1/gpx.min.js"></script>   
  

</head>

<body>

  <header>
    <div class="container">
      <div class="row col-md-auto mt-5">
      </div>
      <img class="logoSavoie" src='../../src/icons/smb.jpg'>
      <div class="row col-md-auto">
        <h1>Points de vue et tables d’orientation</h1>
        <img class="logo" src='../../src/icons/blason-de-savoie-decoupe.jpg'>
      </div>

    </div>
  </header>

  <main>
    <div class="textNav">
      <p>Avec ses reliefs surplombant lacs et cours d’eau, le Pays du Lac d’Aiguebelette possède de nombreux
        points de vue à couper le souffle. Au nord du territoire, le Belvédère de la Dent du Chat offre une vue sur le
        Lac du
        Bourget et le pays de la Dent du Chat. Un peu plus au sud, le Site des Fils offre une vue exceptionnelle sur le
        Rhône et ses
        méandres. Le Col de la Crusille permet de découvrir des paysages moins accidentés sur la vallée du Guiers avec
        un panorama sur
        les montagnes de la Chartreuse. Enfin, l’ascension du Col de l’Epine permet de bénéficier d’une vue
        exceptionnelle sur le lac d’Aiguebelette
        et de l’autre côté sur la vallée de Chambéry et Aix-les-Bains.</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div id="mymap"></div>
          <div id="info"></div>
          <div id="infoposition"></div>
        </div>
        <div class="col-md-3">
          <h2>Points de Vue</h2>
          <ul>
            <li><button type="button" class="button btn" onclick="affiche()"><img
                  src='../../src/icons/Templatic-map-icons/photography.png' />Vue d'Aiguebelette</button></li>
            <li><button type="button" class="button btn" onclick="afficheChambery()"><img
                  src='../../src/icons/Templatic-map-icons/photography.png' />Vue Chambéry</button></li>
                  <li><button type="button" class="button btn btn-primary ml-4" onclick="clearMap()"><img
                    src='' />Effacer carte</button></li>
            

            </ul>
        </div>
        <div class="col-md-3">
          <h2>Outils</h2>
          <ul>
            <li><button id="geolocalisation" type="button" class="button btn" onclick="currentLocation()"><img
                  src='../../src/icons/Templatic-map-icons/professional.png' />Géolocalisation</button></li>
            <li><button id="geolocalisation" type="button" class="button btn" onclick="itinerary()"><img
                  src='../../src/icons/Templatic-map-icons/playgrounds.png' />Itinéraire</button></li>
            <li><button type="button" class="button btn" onclick="loadData(urlPark, park)"><img
                  src='../../src/icons/Templatic-map-icons/automotive.png' />Parking</button></li>
            <li><button type="button" class="button btn" onclick="bus(), tronconBus()"><img
                  src='../../src/icons/Templatic-map-icons/transport.png' />Bus</button></li>
            <li><button type="button" class="button btn" onclick="bike()"><img
                  src='../../src/icons/Templatic-map-icons/birds.png' />Pistes cyclable</button></li>
          </ul>
        </div>
      </div>
    </div>
 
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h2>Aiguebelette</h2>
    <?php 
    while ($row = $resultsAiguebelette->fetchArray()) { 
        ?>
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="<?php echo $row['photo']; ?>" class="card-img" alt="<?php echo $row['alt']; ?>">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"><?php echo $row['titre']; ?></h5>
            <p class="card-text"><?php echo $row['description']; ?></p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    <?php } ?>
  </div>
  <div class="col-md-6">
    <h2>Chambery</h2>
      <?php 
      while ($row = $resultsChambery->fetchArray()) { 
          ?>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="<?php echo $row['photo']; ?>" class="card-img" alt="<?php echo $row['alt']; ?>">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title"><?php echo $row['titre']; ?></h5>
              <p class="card-text"><?php echo $row['description']; ?></p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      <?php } ?>
    </div>

  </div>
  </div>
  </main>

  <footer>
    <div class="card text-center">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Découvrir savoie mont blanc</h5>
        <img src='../../src/icons/smb.jpg'>
        <p class="card-text">La SNCF dessert toutes les vallées alpines par liaisons régulières. Cinq aéroports dont
          deux internationaux desservent la destination et un système de navettes permet de rejoindre votre lieu de
          vacances en Savoie Mont Blanc.</p>
        <a href="#" class="btn btn-primary">Haut</a>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>
  </footer>

  <script type="text/javascript" src="../js/scriptInit.js"></script>
  <script type="text/javascript" src="../js/scriptParking.js"></script>
  <script type="text/javascript" src="../js/scriptBike.js"></script>
  <script type="text/javascript" src="../js/scriptBus.js"></script>
  <script type="text/javascript" src="../js/scriptVue.js"></script>
  <script type="text/javascript" src="../js/scriptGeo.js"></script>
  <script type="text/javascript" src="../js/scriptItinerary.js"></script>



</body>

</html>
