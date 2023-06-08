let menuButton = document.querySelector('.navbar-menu');
menuButton.addEventListener('click', () => {
    document
        .querySelector('.navbar-mobile')
        .classList.toggle('navbar-mobile--visible');
});

var menuLinks = document.querySelectorAll('.navbar__link--close');

menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        var mobileMenu = document.querySelector('.navbar-mobile');
        mobileMenu.classList.remove('navbar-mobile--visible');
    });
});

AOS.init();
