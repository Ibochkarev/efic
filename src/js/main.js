import $ from '../local_modules/jquery/dist/jquery.min'
import { Swiper, Mousewheel, Navigation } from 'swiper'
Swiper.use([Mousewheel, Navigation])

document.addEventListener(`DOMContentLoaded`, () => {
    $('.video-player')
        .parent()
        .click(function () {
            if ($(this).children('.video-player').get(0).paused) {
                $(this).children('.video-player').get(0).play()
            } else {
                $(this).children('.video-player').get(0).pause()
                $(this).children('.video__overlay').fadeIn()
            }
            $('.video__overlay').addClass('is-hidden')
            $('.video__play').addClass('is-hidden')
        })

    const expertsSlider = new Swiper(`.expert-slider`, {
        loop: false,
        speed: 800,
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.slideNext-btn',
            prevEl: '.slidePrev-btn',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                slidesPerColumn: 2,
                spaceBetween: 30,
            },
        },
    })

    // const mobileMenu = document.querySelector(`.mobile-menu`),
    //     menuBtn = document.querySelector(`.header__btn-menu`),
    //     menuLink = document.querySelectorAll(`.mobile-menu__list-link`)

    // menuBtn.addEventListener(`click`, function () {
    //     if (mobileMenu.classList.contains(`is-active`)) {
    //         mobileMenu.classList.remove(`is-active`)
    //         menuBtn.classList.remove(`is-open`)
    //     } else {
    //         mobileMenu.classList.add(`is-active`)
    //         menuBtn.classList.add(`is-open`)
    //     }
    // })

    // menuLink.forEach((el) => {
    //     el.addEventListener(`click`, () => {
    //         mobileMenu.classList.remove(`is-active`)
    //         menuBtn.classList.remove(`is-open`)
    //     })
    // })
})
