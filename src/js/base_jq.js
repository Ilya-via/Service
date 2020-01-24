//PRELOADER
$(window).on('load', function () {
    $preloader = $('.loaderArea'),
        $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(300).fadeOut('slow');
});

var eventObj = {
    appended: ""
};
$(window).scroll(function () {
    var scroll = $(document).scrollTop();
    if (scroll > 1) {
        if (eventObj.appended == "") {
            eventObj.appended = false;
        }
        if (!eventObj.appended) {
            $('.scrollUp').removeClass('invisible');
            setTimeout(function () {
                $('.scrollUp').removeClass("opacityNone");
                eventObj.appended = true;
            }, 50);
        }

    } else if (eventObj.appended) {
        $('.scrollUp').addClass("opacityNone");
        setTimeout(function () {
            $('.scrollUp').addClass("invisible");
            eventObj.appended = false;
        }, 250);
    }
});

$(document).ready(function () {
    $('.scrollUp').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 150)
    });

    $("scrollUp").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});

function selectionScrollButton() {
    scaleTransform('.scrollUp');
}
function noselectionScrollButton() {
    unscaleTransform('.scrollUp');
}
function scaleTransform(value) {
    $(value).css("-o-transform", 'scale(1.2, 1.2)');
    $(value).css("-ms-transform", 'scale(1.2, 1.2)');
    $(value).css("-moz-transform", 'scale(1.2, 1.2)');
    $(value).css("-webkit-transform", 'scale(1.2, 1.2)');
    $(value).css("transform", 'scale(1.2, 1.2)');
    $(value).css("boxShadow", 'inset 0 0 10px 4px rgba(0, 0, 0, 0.822)');
}
function unscaleTransform(value) {
    $(value).css("-o-transform", 'scale(1.0, 1.0)');
    $(value).css("-ms-transform", 'scale(1.0, 1.0)');
    $(value).css("-moz-transform", 'scale(1.0, 1.0)');
    $(value).css("-webkit-transform", 'scale(1.0, 1.0)');
    $(value).css("transform", 'scale(1.0, 1.0)');
    $(value).css("boxShadow", '0 0 0 0 rgba(0, 0, 0, 0)');
}