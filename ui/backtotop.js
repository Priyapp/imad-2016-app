$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 200) {
            $('#totop').fadeIn();
        } else {
            $('#totop').fadeOut();
        }
    });

    $('#totop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});