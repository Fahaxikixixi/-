$(function(){
    var top = $(".two").offset().top;
    $(window).scroll(function(){
        if($(document).scrollTop() >= top){
            $(".list").fadeIn();
        }else{
            $(".list").fadeOut();
        }
    });
    $(".list li ").click(function(){
      var gotop =   $(".w").eq($(this).index()).offset().top;
        $("body, html").stop().animate({
            scrollTop:gotop
        });
    });
});