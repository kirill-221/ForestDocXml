function initSlider() {
    const clientWidth = document.documentElement.clientWidth;
    let slidesToShow;
    if (clientWidth > 576) {
        slidesToShow = 2;
    } else {
        slidesToShow = 1;
    }

    const slidesToScroll = 1;
    let gap = 40;
    let position = 0;

    const slider = document.querySelector('.slider');
    const slidesContainer = document.querySelector('.slider__slides');
    const slides = document.querySelectorAll('.slider__slide');
    const buttonPrev = document.querySelector('.button__type--prev');
    const buttonNext = document.querySelector('.button__type--next');
    let scrolledSlides = document.querySelector('.js-scrolled-slides');

    let slideWidth =
        (slider.clientWidth - (slidesToShow - 1) * gap) / slidesToShow;
    const slidesCount = slides.length;

    const setPosition = () => {
        slidesContainer.style.transform = `translateX(${position}px)`;
    };

    function changeWidth() {
        slides.forEach((slide) => {
            slide.style.minWidth = `${slideWidth}px`;
            slide.style.marginRight = `${gap}px`;
            if (window.matchMedia('(max-width: 1300px)').matches) {
                slide.style.maxWidth = '100px';
            }
            if (window.matchMedia('(max-width: 576px)').matches) {
                slide.style.maxWidth = '100px';
                gap = 20;
                slide.style.marginRight = `${gap}px`;
            } else {
                slide.style.maxWidth = '200px';
            }
        });
    }
    changeWidth();
    setPosition();

    window.addEventListener('resize', initSlider);

    const checkButtons = () => {
        buttonPrev.disabled = position === 0;
        buttonNext.disabled =
            position <= -(slidesCount - slidesToShow) * slideWidth;
    };
    checkButtons();

    const movePosition = (slideWidth + gap) * slidesToScroll;

    if (slidesToShow === 1) {
        scrolledSlides.textContent = '1';
    } else {
        scrolledSlides.textContent = '2';
    }

    buttonPrev.addEventListener('click', () => {
        const unscrolledSlidesCount = Math.abs(position) / (slideWidth + gap);
        position +=
            unscrolledSlidesCount >= slidesToScroll
                ? movePosition
                : unscrolledSlidesCount * (slideWidth + gap);
        setPosition();
        checkButtons();

        if (slidesToShow === 1) {
            scrolledSlides.textContent =
                unscrolledSlidesCount + slidesToScroll - 1;
        } else {
            scrolledSlides.textContent = unscrolledSlidesCount + slidesToScroll;
        }
    });

    buttonNext.addEventListener('click', () => {
        const unscrolledSlidesCount =
            slidesCount -
            (Math.abs(position) + slidesToShow * (slideWidth + gap)) /
                (slideWidth + gap);
        position -=
            unscrolledSlidesCount >= slidesToScroll
                ? movePosition
                : unscrolledSlidesCount * (slideWidth + gap);

        setPosition();
        checkButtons();

        const allSlides = slides.length;
        scrolledSlides.textContent =
            allSlides - unscrolledSlidesCount + slidesToScroll;
    });
}

initSlider();
