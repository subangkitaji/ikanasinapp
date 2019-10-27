//event pada saatlink diklik
$("a[href^='#']").click(function (e) {

    e.preventDefault();

    var position =
        $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    });


});



// navbar scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if ($(window).width() >= 1024) {
        if (scroll >= 80) {
            $("nav").css('background', 'linear-gradient(90deg, rgba(8,111,193,1) 0%, rgba(7,133,192,1) 51%, rgba(6,151,191,1) 100%)');
            $("nav").css('border-bottom', 'none');
            $(".my-2 .my-sm-0").css('background-color', 'rgba(3, 199, 189, 0.5)')
        } else {
            $("nav").css('border-bottom', ' 1px solid rgba(255, 255, 255, 0.5)');
            $("nav").css('background', 'transparent');
            $(".my-2 .my-sm-0").css('background-color', '#1060cf')

        }
    } else if ($(window).width() <= 514) {
        $("nav").css('border-bottom', 'none');
        $("nav").css('background', 'linear-gradient(90deg, rgba(8,111,193,1) 0%, rgba(7,133,192,1) 51%, rgba(6,151,191,1) 100%)');
        $(".my-2 .my-sm-0").css('background-color', 'rgba(3, 199, 189, 0.5)')

    } else {
        $("nav").css('background', 'linear-gradient(90deg, rgba(8,111,193,1) 0%, rgba(7,133,192,1) 51%, rgba(6,151,191,1) 100%)');
        $("nav").css('border-bottom', 'none');
        $(".my-2 .my-sm-0").css('background-color', 'rgba(3, 199, 189, 0.5)')
    }

});


// get value
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 670 && scroll <= 1300) {
        $("a[href^='#about']").addClass('active');
    } else if (scroll >= 1485 && scroll <= 2000) {
        $("a[href^='#features']").addClass('active');
    } else if (scroll >= 2050 && scroll <= 2400) {
        $("a[href^='#faq']").addClass('active');
    } else {
        $("a[href^='#about']").removeClass('active');
        $("a[href^='#features']").removeClass('active');
        $("a[href^='#faq']").removeClass('active');
    }
});

// ajax fetch api
// link below
// https://api.thingspeak.com/channels/884462/feeds.json?results=1