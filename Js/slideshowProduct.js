$(function(){
    $(".product img:gt(0)").hide();
    setInterval(function(){
        $(".product :first-child").fadeOut(500)
        .next(".product img").fadeIn(500)
        .end().appendTo(".product");
    },5000);
})