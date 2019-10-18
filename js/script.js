$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
        $("nav").css('background-color', '#1d4769');
        $(".btn").addClass('btn-outline-info');

    } else {
        $('nav').css('background-color', 'transparent');
        $(".btn").removeClass('btn-outline-dark');
        $(".btn").addClass('btn-outline-dark');



    }
});