"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts
  const profilesSlider = new Swiper(".slider-profiles-home", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 12,
    slidesPerView: 6,
    slidesPerGroup: 1,
    speed: 500,
    effect: "slider",
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
    //! Адаптив слайдера
    breakpoints: {
      1200: {
        slidesPerView: 7,
      },

      1025: {
        slidesPerView: 6,
      },

      1024: {
        slidesPerView: 5,
      },

      601: {
        slidesPerView: 4,
      },

      500: {
        slidesPerView: 3,
      },

      0: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
    },
  });
  //! End Scripts
});
