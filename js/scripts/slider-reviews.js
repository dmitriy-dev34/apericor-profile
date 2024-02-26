"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts
  /* ------------------- Slider Reviews -------------------- */
  const sliderReview = new Swiper(".slider-reviews", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 24,
    slidesPerView: 2,
    slidesPerGroup: 1,
    speed: 500,
    effect: "slider",
    autoplay: {
      delay: 5000,
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
      1025: {
        slidesPerView: 3,
        spaceBetween: 32,
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 24,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
    },
  });
  //! End Scripts
});
