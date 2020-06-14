$(window).on('load', function () {

  $(this).impulse();
  $("body").css("overflow-y", "scroll");
  $(".preload").addClass("hide");

  setTimeout(function () {
    $(".preload").css("display", "none");
  }, 800);
  checkCookie();
});