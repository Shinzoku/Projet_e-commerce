//======================================DEBUT DE CART / ORDER-DETAIL / DELIVERY=========================================
//calcul automatique du sous total et du grand total
let tbody = $("tbody");
let quantite, price, totalLigne;
let total = 0
tbody.children().each(function() {
    if ($(this).find(".quantite").length > 0) {
        quantite = parseFloat($(this).find(".quantite")[0].innerText);
        price = parseFloat($(this).find(".price")[0].innerText);
        totalLigne = quantite * price;
        $(this).find(".soustotal").text(totalLigne);
        total += totalLigne
    }
})
$('.grandtotal')[0].innerText = total

//mettre la suppression en fonction
$(".supprime1").on("click", function() {
    $(".ligne1").hide()
    $('.grandtotal')[0].innerText = parseFloat($(".st2")[0].innerText);
})
$(".supprime2").on("click", function() {
    $(".ligne2").hide()
    $('.grandtotal')[0].innerText = parseFloat($(".st1")[0].innerText);
})

//accordion page delivery
$(function() {
    var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };
    $("#accordion").accordion({
        icons: icons
    });
    $("#toggle").button().on("click", function() {
        if ($("#accordion").accordion("option", "icons")) {
            $("#accordion").accordion("option", "icons", null);
        } else {
            $("#accordion").accordion("option", "icons", icons);
        }
    });
});

//=========================================FIN DE CART / ORDER-DETAIL / DELIVERY===========================================