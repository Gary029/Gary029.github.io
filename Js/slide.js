$(function () {
    $(".firstSlider").hide()
    var currimg = $(".firstSlider").first()
    var index = 0;

    currimg.show();
    
    $("#next").click(function(e){
        e.preventDefault();
        currimg.fadeOut();
        if(index==$(".firstSlider").length -1){
            index=0;
            currimg = $(".firstSlider").first();
        }
        else{
            index +=1;
            currimg = currimg.next();
        }

        currimg.fadeIn();
    })

    $("#prev").click(function (e) { 
        e.preventDefault();
        currimg.fadeOut();
        if(index==0){
            index=$(".firstSlider").length-1;
            currimg = $(".firstSlider").last();
        }
        else{
            index -=1;
            currimg = currimg.prev();
        }

        currimg.fadeIn();
    });
})