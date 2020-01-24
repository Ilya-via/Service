var owl = $('.owl-carousel');
owl.owlCarousel({
    animateOut: 'zoomOutDown',
    animateIn: 'zoomInDown',
    items: 7,
    nav: true,
    loop: true,
    touchDrag: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 7000,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [2000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})