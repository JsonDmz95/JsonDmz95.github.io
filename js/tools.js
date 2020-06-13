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
});
// END OF Local Scroll 