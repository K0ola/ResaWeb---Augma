<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="contact.css">
    <link rel="stylesheet" href="generation.css">
    <title>Contact | Augma</title>
</head>
<body>
<h1 class="text-header" id="title">Augma - Contact</h1>

<div id="line">
        </div>
    </header>
    <div class="nav slide-top">
        <div class="bouton-nav" id="shop">
            <a href="shop/shop.php">Boutique</a>
            <div class="underline-bouton-nav" id="under-shop"></div>
        </div>
        <div class="bouton-nav" id="propos">
            <a href="propos/propos.html">À propos</a>
            <div class="underline-bouton-nav" id="under-propos"></div>
        </div>
        <div class="bouton-nav" id="contact">
            <a href="contact/contact.php">Contact</a>
            <div class="underline-bouton-nav" id="under-contact"></div>
        </div>  
        <div class="bouton-nav" id="news">
            <a href="nouveautés/news.html">Nouveautés</a>
            <div class="underline-bouton-nav" id="under-news"></div>
        </div>
    </div>

<div class="warning">
    <img src="images/warning.png">
    <p class="text-disclaimer">Suite au mouvement social actuel, il est possible que cela impacte sensiblement les livraisons de ce jour. Nos équipes sont mobilisées pour vous apporter les meilleures solutions dans les meilleurs délais.</p>
    <img src="images/warning.png">
</div>

<div class="formulaire"></div>

    <form method="post">
        <h1 class="text-header">Nous contacter</h1>
        <label>Votre email</label>
        <input type="email" name="email" required>
        <label>Message</label>
        <textarea name="message" required></textarea>
        <input type="submit" class="envoyer">
    </form>

</div>

<?php
if (isset($_POST['message'])) {
$entete  = 'MIME-Version: 1.0' . "\r\n";
$entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$entete .= 'From: AugmaSupport@augma.fr' . "\r\n";
$entete .= $_POST['email'];

$message = '<h1>Message envoyé depuis la page Contact Augma.fr</h1>
<p><b>Email : </b>' . $_POST['email'] . '<br><br>
<b>Message : </b>' . htmlspecialchars($_POST['message']) . '</p>';

$retour = mail('augmashop@gmail.com', 'Envoi depuis page Contact', $message, $entete);
}
?>

<div class="barre-separation"></div>

    <div class="pied-de-page">
        <div class="colonne-pied-de-page" id="premiere-colonne">
            <a class="premier-lien-colonne">Accueil<br></a>
            <a>Boutique<br></a>
            <a>Contact<br></a>
            <a>À propos<br></a>
            <a>Nouveautés<br></a>

        </div>

        <div class="colonne-pied-de-page" id="deuxieme-colonne">
            <a class="premier-lien-colonne">Editions limitées<br></a>
            <a>Animés | Mangas<br></a>
            <a>Films |Séries<br></a>
            <a>Traditionnel<br></a>

        </div>

        <div class="colonne-pied-de-page" id="troisieme-colonne">
            <a class="premier-lien-colonne">Instagram<br></a>
            <a>Tik Tok<br></a>
            <a>Twitter<br></a>
            <a>Discord</a>

        </div>

        <div class="colonne-pied-de-page" id="quatrieme-colonne">
            <img src="images/logo-Augma.png" width="150px">

        </div>



    </div>

    <div class="footer">
        <p class="marque-depose">© 2023-2023, Augma Inc.</p>
    </div>
</body>
<script src="script.js"></script>
</html>