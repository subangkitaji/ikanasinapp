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