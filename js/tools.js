$(window).on("load", function(){
    $('.transparent-link').hover(function(){
        $($(this).data("target")).addClass("in");
    }, function(){
        $($(this).data("target")).removeClass("in");
    });
});