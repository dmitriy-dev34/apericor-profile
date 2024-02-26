"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts
  /* ------------------- Slider Features -------------------- */
  const sliderFeatures = new Swiper(".slider-features", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 500,
    effect: "slider",
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  //! End Scripts
});
