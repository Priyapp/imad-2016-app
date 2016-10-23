$(window).scroll(function() {
  
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function() {
    alert("clik");
    $("html, body").animate({scrollTop: 0}, 1000);
});
