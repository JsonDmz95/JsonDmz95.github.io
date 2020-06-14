// show elemnts with hover 
$(window).on("load", function(){
    $('.transparent-link').hover(function(){
        $($(this).data("target")).addClass("in");
    }, function(){
        $($(this).data("target")).removeClass("in");
    });
});
// END OF show elemnts with hover

// Local Scroll 
$('.nav-link').click(function(e) {
    var jump = $(this).attr('href');
    var position = $(jump).offset();
    $('body, html').stop().animate({
        scrollTop: position.top
    }, 1400);
    e.preventDefault();
    $(".navbar-collapse").collapse('hide');
});
// END OF Local Scroll 

// Dark Mode 
$('.lights-btn').click(function(e){
    // $("body").addClass("dark")
    if ($("body").hasClass("dark") == true){
        $("body").removeClass("dark")
        $(this).attr("title", "Turn Off the lights");

        createCookie("",-1);
        createCookie("false",30);
    } else{
        $("body").addClass("dark")
        $(this).attr("title", "Turn On the lights");

        createCookie("",-1);
        createCookie("true",30);
    }
});
// END OF Dark Mode 