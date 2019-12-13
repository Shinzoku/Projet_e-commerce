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
        "Confort du pied"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
});

$(function() {
    $("#tabs").tabs();
});


$(function() {
    $("#menu").menu({
        items: "> :not(.ui-widget-header)"
    });
    $(".cat").css("background-color", "#9aebff")
});

$(".btn-popin1").on("click", function() {
    $("#dialog").dialog(); // pop-in détail
    let titre = $("legend").text("Maison");
    let nom = $("#nom").val("Mohamed");
    let prenom = $("#prénom").val("Ali");
    let numero = $("#numero").val("18");
    let rue = $("#rue").val("d'Arras");
    let cp = $("#cp").val("59500");
    let ville = $("#ville").val("Douai");
});


$(".btn-popin2").on("click", function() {
    $("#dialog").dialog(); // pop-in détail
    let titre = $("legend").text("Travail");
    let nom = $("#nom").val("Mohamed");
    let prenom = $("#prénom").val("Ali");
    let numero = $("#numero").val("33");
    let rue = $("#rue").val("Léon Blum");
    let cp = $("#cp").val("62800");
    let ville = $("#ville").val("Liévin");
});


$(".btn-popin3").on("click", function() {
    $("#dialog").dialog(); // pop-in détail
    let titre = $("legend").text("Livraison");
    let nom = $("#nom").val("Mohamed");
    let prenom = $("#prénom").val("Ali");
    let numero = $("#numero").val("29");
    let rue = $("#rue").val("de Beaumont");
    let cp = $("#cp").val("62950");
    let ville = $("#ville").val("Noyelles-Godault");
});

$("#valider").on("click", function() { //disparait de haut en bas
    let valider = $("#dialog").slideToggle();
    $(valider).dialog("close");
});


$(".btn-sup1").on("click", function() {
    let supp1 = $(".btn-group1").remove(); // supprimer l'element1
});

$(".btn-sup2").on("click", function() {
    let supp2 = $(".btn-group2").remove(); // supprimer l'element2
});

$(".btn-sup3").on("click", function() {
    let supp3 = $(".btn-group3").remove(); // supprimer l'element3
});
$(".btn-mod1").on("click", function() {
    $("#dialog").dialog(); // pop-in détail
    let titre = $("legend").val();
    let nom = $("#nom").val();
    let prenom = $("#prénom").val();
    let numero = $("#numero").val();
    let rue = $("#rue").val();
    let cp = $("#cp").val();
    let ville = $("#ville").val();
});
$(".btn-mod2").on("click", function() {
    $("#dialog").dialog(); // pop-in détail
    let titre = $("#titre").val();
    let nom = $("#nom").val();
    let prenom = $("#prénom").val();
    let numero = $("#numero").val();
    let rue = $("#rue").val();
    let cp = $("#cp").val();
    let ville = $("#ville").val();
});
$(".btn-mod3").on("click", function() {
    $("#dialog").dialog(); // pop-in détail
    let titre = $("#name").val();
    let nom = $("#nom").val();
    let prenom = $("#prénom").val();
    let numero = $("#numero").val();
    let rue = $("#rue").val();
    let cp = $("#cp").val();
    let ville = $("#ville").val();
});