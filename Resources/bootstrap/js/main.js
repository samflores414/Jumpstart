$(window).scroll(function () {
    if ($(document).scrollTop() > 50 ){
        $('nav').addClass('hide');

    }
    else{
        $('nav').removeClass('hide');
    }
})
