var didScroll;
var lastScrollTop = 0;
var delta = 0.5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 100);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        $("header").removeClass("nav-down").addClass("nav-up");
    } else {
        if(st==0){
            $("header").removeClass("nav-up").addClass("nav-down").addClass("transparent");
        }
        else{
            $("header").removeClass("nav-up").removeClass("transparent").addClass("nav-down");
        }

    }
    
    lastScrollTop = st;
}