<?php
        // $db = new SQLite3('../../data/bddBot.db');
  
        // $results = $db->query('SELECT * FROM vue INNER JOIN plus ON plus.ID_vue = vue.ID');
       
?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="../css/stylesheet.css">
  
   
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous">
  <link rel="stylesheet" href="../css/stylesheet.css">

  <!--1. Inclure le lien vers le fichier css de leaflet dans le head-->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
      integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
      crossorigin="" />
  <!--2. Inclure le lien vers le script js APRÈS le lien vers le css-->
  <!-- <script src="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js%22%3E</script> -->
  <!-- <script type="text/javascript" src="js/data.js"></script>

  <script type="text/javascript" src="parking.js"></script>
  <script type="text/javascript" src="cinema.js"></script>-->
  <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
      integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
      crossorigin=""></script> 

<!-- Library Leaflet
<link rel="stylesheet" href="chemin/vers/leaflet/leaflet.css" />
<script src="chemin/vers/leaflet/leaflet.js"></script> -->

<!-- Extension Géoportail pour Leaflet -->
<!-- <script src="chemin/vers/GpPluginLeaflet.js"></script>
<link rel="stylesheet" href="chemin/vers/GpPluginLeaflet.css" />
<script data-key="7yk0tjvpwtigz2vo8jhpu5nt" src="../../src/geoportal-extensions-leaflet/dist/GpPluginLeaflet.js"></script>              -->
             
             
             
             
             
              <!-- Load Leaflet 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>  
      Add leaflet ajax for loading geojson 
     <script src="leaflet.ajax.min.js"></script>  -->
    
</head>

<body>

  <header>
      <div class="pictureNav">
        <h1>Points de vue et tables d’orientation</h1>
      </div>

    <div class="textNav"><p>Avec ses reliefs surplombant lacs et cours d’eau, le Pays du Lac d’Aiguebelette possède de nombreux 
      points de vue à couper le souffle. Au nord du territoire, le Belvédère de la Dent du Chat offre une vue sur le Lac du 
      Bourget et le pays de la Dent du Chat. Un peu plus au sud, le Site des Fils offre une vue exceptionnelle sur le Rhône et ses 
      méandres. Le Col de la Crusille permet de découvrir des paysages moins accidentés sur la vallée du Guiers avec un panorama sur 
      les montagnes de la Chartreuse. Enfin, l’ascension du Col de l’Epine permet de bénéficier d’une vue exceptionnelle sur le lac d’Aiguebelette 
      et de l’autre côté sur la vallée de Chambéry et Aix-les-Bains.</p></div>
  </header>
  <main>
<div>

<!-- <label id="GPshowRoutePicto-1554989779158" class="GPshowAdvancedToolPicto" for="GPshowRoute-1554989779158" title="Ouvrir le calcul d'itinéraire"><span id="GPshowRouteOpen-1554989779158" class="GPshowAdvancedToolOpen"></span></label> -->
<!-- <iframe id="mymap" width="100%" height="650" src="//jsfiddle.net/ignfgeoportail/s30zo9eo/embedded/result,js,html,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe> -->

    <div id="mymap"></div>
    <div id="info"></div>
    <div id="infoposition"></div>
</div>
<form>
<!-- <input id="geolocalisation" onClick="initElement()" type="button" value="Démarrer la machine" > -->
</form>
    <button id="geolocalisation" type="button" class="button btn btn-primary" onClick="initElement()">Géolocalisation</button>
    <button type="button" class="button btn btn-primary">Primary</button>
    <button type="button" class="button btn btn-primary">Primary</button>
    <button type="button" class="button btn btn-primary">Primary</button>

    <?php 
    while ($row = $results->fetchArray()) { 
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




    <script>

            // window.onload = function () {
            //     Gp.Services.getConfig({
            //         apiKey: 'CLEAPI',
            //         onSuccess: function (response) {
            //             // votre utilisation de l'extension Géoportail pour Leaflet
            //         }
            //     });
            // }
        </script>





  </main>

  <footer>

    <div class="card text-center">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>

  </footer>


  




  <script type="text/javascript" src="../js/scriptInit.js"></script>
</body>

</html>
