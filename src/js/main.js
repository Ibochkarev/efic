import { Swiper, Mousewheel, Navigation } from 'swiper'
Swiper.use([Mousewheel, Navigation])

document.addEventListener(`DOMContentLoaded`, () => {
    const expertsSlider = new Swiper(`.expert-slider`, {
        loop: false,
        speed: 800,
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.slideNext-btn',
            prevEl: '.slidePrev-btn',
        },
    })

    const mobileMenu = document.querySelector(`.mobile-menu`),
        menuBtn = document.querySelector(`.header__btn-menu`)

    menuBtn.addEventListener(`click`, function () {
        if (mobileMenu.classList.contains(`is-active`)) {
            mobileMenu.classList.remove(`is-active`)
            menuBtn.classList.remove(`is-open`)
        } else {
            mobileMenu.classList.add(`is-active`)
            menuBtn.classList.add(`is-open`)
        }
    })
})
