"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  /* ------------------- My Gallery -------------------- */
  const photoItems = document.querySelectorAll(".private-photo");
  const myGallery = document.querySelectorAll(".my-gallery");

  // Функция для отображения галереи
  function showGallery(galleryId, startIndex) {
    const gallery = document.querySelector(`[data-gallery="${galleryId}"]`);
    const galleryItems = gallery.querySelectorAll(".my-gallery__item");

    // Показываем выбранную фотографию
    galleryItems.forEach((item, index) => {
      if (index === startIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Показываем галерею
    gallery.classList.add("active");
  }

  // Обработчики событий для триггеров
  photoItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      const galleryId = this.getAttribute("data-gallery-open");
      showGallery(galleryId, index);
    });
  });

  // Обработчики событий для кнопок "prev" и "next"
  myGallery.forEach((gallery) => {
    const closeBtn = gallery.querySelector(".my-gallery__close");
    const prevBtn = gallery.querySelector(".my-gallery__prev");
    const nextBtn = gallery.querySelector(".my-gallery__next");
    const galleryItems = gallery.querySelectorAll(".my-gallery__item");

    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        gallery.classList.remove("active");
      });
    }

    if (prevBtn && nextBtn) {
      let currentIndex = 0;

      // Функция для переключения на предыдущую фотографию
      function showPrev() {
        currentIndex =
          (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        showGallery(gallery.getAttribute("data-gallery"), currentIndex);
      }

      // Функция для переключения на следующую фотографию
      function showNext() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        showGallery(gallery.getAttribute("data-gallery"), currentIndex);
      }

      prevBtn.addEventListener("click", showPrev);
      nextBtn.addEventListener("click", showNext);
    }
  });

  //!! End Scripts
});
