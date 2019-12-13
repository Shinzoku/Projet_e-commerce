//================================================DEBUT DE INDEX=======================================================
//Fonction auto-complete de la barre de recherche
$(function() {
    var availableTags = [
        "Vestes (H)",
        "Pantalons (H)",
        "Bonnets (H)",
        "Chaussettes (H)",
        "Chaussures (H)",
        "Gants (H)",
        "Ski (H)",
        "Ski biathlon (H)",
        "Snowboard (H)",
        "Batons de ski (H)",
        "Batons de ski biathlon (H)",
        "Chaussures de ski (H)",
        "Boots snowboard (H)",
        "Patins à glace (H)",
        "Combinaisons biathlon (H)",
        "Combinaisons de patinage (H)",
        "Tunique de patinage (H)",
        "Carabines (H)",
        "Vestes (F)",
        "Pantalons (F)",
        "Bonnets (F)",
        "Chaussettes (F)",
        "Chaussures (F)",
        "Gants (F)",
        "Ski (F)",
        "Ski biathlon (F)",
        "Snowboard (F)",
        "Batons de ski (F)",
        "Batons de ski biathlon (F)",
        "Chaussures de ski (F)",
        "Boots snowboard (F)",
        "Patins à glace (F)",
        "Combinaisons biathlon (F)",
        "Combinaisons de patinage (F)",
        "Tunique de patinage (F)",
        "Carabines (F)",
        "Vestes (E)",
        "Pantalons (E)",
        "Bonnets (E)",
        "Chaussettes (E)",
        "Chaussures (E)",
        "Gants (E)",
        "Ski (E)",
        "Ski biathlon (E)",
        "Snowboard (E)",
        "Batons de ski (E)",
        "Batons de ski biathlon (E)",
        "Chaussures de ski (E)",
        "Boots snowboard (E)",
        "Patins à glace (E)",
        "Combinaisons biathlon (E)",
        "Combinaisons de patinage (E)",
        "Tunique de patinage (E)",
        "Carabines (E)",
        "Casques",
        "Masques",
        "Lunettes de soleil",
        "Sac à dos",
        "Séecurité montagne",
        "Sac airbag",
        "Protections",
        "Confort du pied",
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
});

//cacher les blocs au chargement 
$(".homme").hide();
$(".femme").hide();
$(".enfant").hide();
$(".accessoires").hide();


//change couleur homme
$("#homme").on("mouseover", function() {
    $("#homme").css("color", "#e65324");
    $("#femme").css("color", "black");
    $("#enfant").css("color", "black");
    $("#accessoires").css("color", "black");
});
$(".homme").on("mouseleave", function() {
    $("#homme").css("color", "black");
});
//change couleur femme
$("#femme").on("mouseover", function() {
    $("#femme").css("color", "#e65324");
    $("#homme").css("color", "black");
    $("#enfant").css("color", "black");
    $("#accessoires").css("color", "black");
});
$(".femme").on("mouseleave", function() {
    $("#femme").css("color", "black");
});
//change couleur enfant
$("#enfant").on("mouseover", function() {
    $("#enfant").css("color", "#e65324");
    $("#femme").css("color", "black");
    $("#homme").css("color", "black");
    $("#accessoires").css("color", "black");
});
$(".enfant").on("mouseleave", function() {
    $("#enfant").css("color", "black");
});
//change couleur accessoires
$("#accessoires").on("mouseover", function() {
    $("#accessoires").css("color", "#e65324");
    $("#femme").css("color", "black");
    $("#enfant").css("color", "black");
    $("#homme").css("color", "black");
});
$(".accessoires").on("mouseleave", function() {
    $("#accessoires").css("color", "black");
});


//montre et cache le bloc homme
$("#homme").on("mouseover", function() {
    $(".homme").show();
    $(".femme").hide();
    $(".enfant").hide();
    $(".accessoires").hide();
});
$(".homme").on("mouseleave", function() {
    $(".homme").hide();
});
//montre et cache le bloc femme
$("#femme").on("mouseover", function() {
    $(".femme").show();
    $(".homme").hide();
    $(".enfant").hide();
    $(".accessoires").hide();
});
$(".femme").on("mouseleave", function() {
    $(".femme").hide();
});
//montre et cache le bloc enfant
$("#enfant").on("mouseover", function() {
    $(".enfant").show();
    $(".femme").hide();
    $(".homme").hide();
    $(".accessoires").hide();
});
$(".enfant").on("mouseleave", function() {
    $(".enfant").hide();
});
//montre et cache le bloc accessoires
$("#accessoires").on("mouseover", function() {
    $(".accessoires").show();
    $(".femme").hide();
    $(".enfant").hide();
    $(".homme").hide();
});
$(".accessoires").on("mouseleave", function() {
    $(".accessoires").hide();
});

//cacher les bloc mini menu
$(".blocenfant").hide();
$(".blochomme").hide();

//cacher et montrer les blocs souhaité
$("#meilleursvente").on("click", function() {
    $(".blocfemme").show();
    $(".blocenfant").hide();
    $(".blochomme").hide();
});
$("#produitsenpromo").on("click", function() {
    $(".blocfemme").hide();
    $(".blocenfant").show();
    $(".blochomme").hide();
});
$("#nouveautés").on("click", function() {
    $(".blocfemme").hide();
    $(".blochomme").show();
    $(".blocenfant").hide();
});

//changement de couleur au click de la souris sur le minimenu
$("#meilleursvente").css("background", "#9aebff");
$("#meilleursvente").css("color", "#e65324");

$("#meilleursvente").on("click", function() {
    $("#meilleursvente").css("background", "#9aebff");
    $("#meilleursvente").css("color", "#e65324");
    $("#produitsenpromo").css("background", "#8ba9c7");
    $("#produitsenpromo").css("color", "black");
    $("#nouveautés").css("background", "#8ba9c7");
    $("#nouveautés").css("color", "black");
});

$("#produitsenpromo").on("click", function() {
    $("#produitsenpromo").css("background", "#9aebff");
    $("#produitsenpromo").css("color", "#e65324");
    $("#meilleursvente").css("background", "#8ba9c7");
    $("#meilleursvente").css("color", "black");
    $("#nouveautés").css("background", "#8ba9c7");
    $("#nouveautés").css("color", "black");
});

$("#nouveautés").on("click", function() {
    $("#nouveautés").css("background", "#9aebff");
    $("#nouveautés").css("color", "#e65324");
    $("#meilleursvente").css("background", "#8ba9c7");
    $("#meilleursvente").css("color", "black");
    $("#produitsenpromo").css("background", "#8ba9c7");
    $("#produitsenpromo").css("color", "black");
});
//==================================================FIN DE INDEX=========================================================

//================================================DEBUT DE PRODUCT=======================================================
//permet de switcher entre les images de presentation
$(".vueimage2").hide();
$(".vueimage3").hide();
$(".image1").css("border-color", "red");

$(".image1").on("click", function() {
    $(".vueimage1").show();
    $(".vueimage2").hide();
    $(".vueimage3").hide();
    $(".image1").css("border-color", "red");
    $(".image2").css("border-color", "black");
    $(".image3").css("border-color", "black");
});
$(".image2").on("click", function() {
    $(".vueimage2").show();
    $(".vueimage1").hide();
    $(".vueimage3").hide();
    $(".image2").css("border-color", "red");
    $(".image1").css("border-color", "black");
    $(".image3").css("border-color", "black");
});
$(".image3").on("click", function() {
    $(".vueimage3").show();
    $(".vueimage2").hide();
    $(".vueimage1").hide();
    $(".image3").css("border-color", "red");
    $(".image2").css("border-color", "black");
    $(".image1").css("border-color", "black");
});

//cacher ou montrer les détails supplementaires
$(".detailplus").hide();
$(".details-").hide();


$(".details").on("click", function() {
    $(".detailplus").show();
    $(".details-").show();
    $(".details").hide();
    $(".details-").css("color", "red")
});


$(".details-").on("click", function() {
    $(".detailplus").hide();
    $(".details").show();
});

//==================================================FIN DE PRODUCT=========================================================

//=================================================DEBUT DE PAYMENT========================================================
$("#message").hide();
$(".payer").click(function() {
    $("#message").text("Paiement effectué, merci de votre achat.").fadeIn(1000, function() {
        $(this).fadeOut(4000, function() {});
    });
});

//==================================================FIN DE PAYMENT=========================================================

//==========================================DEBUT DE CONNEXION / INSCRIPTION===============================================
//test 2 input pour verifier s'ils sont identiques(comme confirmer e-mail ou password)
$(".btnIns").on("click", function() {
    let email1 = $("#inputEmail1").val();
    let email2 = $("#inputEmail2").val();
    let pwd1 = $("#inputPassword1").val();
    let pwd2 = $("#inputPassword2").val();
    if (email1 === email2 && pwd1 === pwd2) {
        alert("VOUS ETES INSCRIT");
    } else {
        alert("Erreur: votre E-mail ou votre Password n'est pas bon");
    }
});

$(".formIns").hide();
$(".inscription").on("click", function() {
    $(".formIns").show();
})