// плавный скролл для ссылок навигации
$(document).ready(function () {
    $('.navbar__link[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = $(this).attr('href');
        var $target = $(target);

        $('html, body').animate(
            {
                scrollTop: $target.offset().top,
            },
            1000,
            'swing'
        );
    });
    $('.footer__link[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = $(this).attr('href');
        var $target = $(target);

        $('html, body').animate(
            {
                scrollTop: $target.offset().top,
            },
            1000,
            'swing'
        );
    });
});

$(document).ready(function () {
    $('.phone__input').inputmask({
        mask: '+7(999)99-99-999',
        placeholder: '+7(___)__-__-___',
        clearIncomplete: true,
    });
});
