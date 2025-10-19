<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Timer</title>

    <!-- Police Google corrigée -->
    <link href="https://fonts.googleapis.com/css?family=Aldrich" rel="stylesheet">

    <!-- Correction du chemin du fichier CSS -->
    <link rel="stylesheet" href="assets/css/style.css">

    <!-- Chargement du script JavaScript -->
    <script src="assets/js/script.js" defer></script>
</head>

<body>
    <!-- Conteneur principal -->
    <div id="wrapper">
        <!-- Élément intérieur qui contient le timer -->
        <div class="inside">
            
            <!-- Bloc affichant l’heure -->
            <div class="timer">
                <span id="hours">00</span>
                <span id="minutes">00</span>
                <span id="seconds">00</span>
            </div>

            <!-- Bouton pour pause/play -->
            <div class="controls">
                <button class="button pause"></button>
            </div>
        </div>
    </div>
</body>
</html>
