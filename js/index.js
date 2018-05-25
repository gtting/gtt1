$(function(){
    $('.g-banner .submenu ').hide();
    $('.menuContent .item').mouseenter(function(){
        $(this).addClass('js-menu-item-on');
        var indus = $(this).attr('data-id');
        $('.submenu_'+indus).show();
    }).mouseleave(function(){
        $(this).removeClass('js-menu-item-on');
        var indus = $(this).attr('data-id');
        $('.submenu_'+indus).hide();
    });
    $('.submenu').mouseenter(function(){
        $(this).show();
    }).mouseleave(function(){
        $(this).hide();
    });

})

$(function () {
    $("#js-app-load").on("mouseenter", function () {
        $(this).find(".js-load-box").show()
    }).on("mouseleave", function () {
        $(this).find(".js-load-box").hide()
    })
    $('#shop-cart').on("mouseenter",function(){
        $(this).find('.my-cart').show()
    }).on("mouseleave",function(){
        $(this).find('.my-cart').hide()
    });
})


