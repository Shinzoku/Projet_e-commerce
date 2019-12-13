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

///cacher les blocs au chargement 
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