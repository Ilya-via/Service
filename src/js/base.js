var headerChilds = document.querySelector('#header');
headerChilds.style.visibility = 'hidden';

window.onload = function () {

    var nav = document.querySelectorAll('#header .page'),
        contacts = document.querySelectorAll('#header .contacts li'),
        logo = document.querySelector('#logo'),
        logoImg = document.querySelector('#logoImg'),
        daSlider = document.querySelector('.da-slider'),
        wrapper = document.querySelector('#wrapper'),
        headerHeight = document.querySelector('#header').offsetHeight,
        headerMin = document.querySelector('.header-min'),
        hamburger = document.querySelector('#hamburger-11'),
        headerMobile = document.querySelector('.header-mobile');


    function show(elem, animate) {
        elem.classList.add('visible', animate, 'animated');
    }

    show(logo, 'bounceInRight');

    for (var i = 0; i < nav.length; i++) {
        element = nav[i];
        setTimeout(
            show, i * 100, nav[i], 'bounceInRight');
    }

    for (var i = 0; i < contacts.length; i++) {
        element = contacts[i];
        setTimeout(
            show, i * 100, contacts[i], 'bounceInRight');
    }

    show(logoImg, 'vanishIn');

    show(daSlider, 'bounceInUp');

    setTimeout(
        show, 100, wrapper, 'bounceInUp');

    // Show little header

    function showHide() {
        if (window.pageYOffset >= headerHeight) {
            headerMin.classList.remove('slideUp');
            headerMin.style.display = 'block';
            headerMin.classList.add('slideUpReturn');
        } else {
            headerMin.classList.remove('slideUpReturn');
            headerMin.classList.add('slideUp');
        };
    }

    showHide();

    window.addEventListener('scroll', function () {
        showHide();
    })

    // Hamburger menu

    hamburger.addEventListener('click', function () {
        this.classList.toggle("is-active");
        headerMobile.classList.toggle('header-mobile-slide');
        document.querySelector('.body').classList.toggle('bodySlide');
        document.body.classList.toggle('overflow');
        document.querySelector('.cover').classList.toggle('none');
    })
}