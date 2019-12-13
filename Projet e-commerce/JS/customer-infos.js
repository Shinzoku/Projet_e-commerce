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


$(function() {

    let b = $("#nom").val("Mohamed");
    let c = $("#prénom").val("Ali");
    let d = $("#email").val("wintershop@gmail.com");
    let e = $("#password").val("******");
    let f = $("#newpassword").val("");
    let g = $("#naissance").val("24/06/1984");
});
$(function() {
    let a = $(".card").height();

    let b = $("#menu").height(a);

});