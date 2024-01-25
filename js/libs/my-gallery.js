"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  /* ------------------- My Gallery -------------------- */
  const photoItems = document.querySelectorAll(".private-photo");
  const myGallery = document.querySelectorAll(".my-gallery");
  const bodyPage = document.body;

  function showGallery(gallery, startIndex) {
    const galleryItems = gallery.querySelectorAll(".my-gallery__item");

    // находим тригер открытия
    galleryItems.forEach((item, index) => {
      if (index === startIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // открытие модалки
    gallery.classList.add("active");
    document.body.style.width = `calc(100vw - ${
      window.innerWidth - document.documentElement.clientWidth
    }px)`;
    document.body.style.overflow = "hidden";
  }

  photoItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      const galleryId = this.getAttribute("data-gallery-open");
      const gallery = document.querySelector(`[data-gallery="${galleryId}"]`);
      showGallery(gallery, index);
    });
  });

  myGallery.forEach((gallery) => {
    const closeBtn = gallery.querySelector(".my-gallery__close");
    const prevBtn = gallery.querySelector(".my-gallery__prev");
    const nextBtn = gallery.querySelector(".my-gallery__next");
    const galleryItems = gallery.querySelectorAll(".my-gallery__item");

    // кнопка закрытия
    closeBtn.addEventListener("click", function () {
      gallery.classList.remove("active");
      document.body.style.overflow = "";
      document.body.style.width = "";
    });

    // кнопки перелистывания
    if (prevBtn && nextBtn) {
      let currentIndex = 0;

      function showPrev() {
        currentIndex =
          (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        showGallery(gallery, currentIndex);
      }

      function showNext() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        showGallery(gallery, currentIndex);
      }

      prevBtn.addEventListener("click", showPrev);
      nextBtn.addEventListener("click", showNext);
    }

    // функция закрытия
    function closeModal(e) {
      if (
        e.target.classList.contains("my-gallery__close") ||
        e.target.closest(".my-gallery__close") ||
        e.target.classList.contains("my-gallery__overlay")
      ) {
        gallery.classList.remove("active");
        document.body.style.overflow = "";
        document.body.style.width = "";
      }
    }

    gallery.addEventListener("click", (e) => {
      const target = e.target;
      const isGalleryItem =
        target.classList.contains("my-gallery__item") ||
        target.classList.contains("my-gallery__next") ||
        target.classList.contains("my-gallery__prev");

      if (!isGalleryItem) {
        closeModal(e);
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && gallery.classList.contains("active")) {
        gallery.classList.remove("active");
        document.body.style.overflow = "";
        document.body.style.width = "";
      }
    });
  });

  //!! End Scripts
});
