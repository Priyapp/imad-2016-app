$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 100) {
            $('#totop').fadeIn();
        } else {
            $('#totop').fadeOut();
        }
    });

    $('#totop').click(function(event) {
            event.preventDefault();
        $('html, body').animate({scrollTop : 0}, 800);
    });
});