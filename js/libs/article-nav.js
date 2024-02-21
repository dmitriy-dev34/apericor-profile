"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts
  const articleNavClose = document.querySelector(".article-nav__close");
  const articleNav = document.querySelector(".article-nav");
  const articleNavlinks = document.querySelectorAll(".article-nav__link");

  // Проверяем ширину окна браузера при загрузке и изменении размера окна
  function checkWindowWidth() {
    if (window.innerWidth >= 1025) {
      window.addEventListener("scroll", scrollHandler);
    } else {
      window.removeEventListener("scroll", scrollHandler);
      articleNav.classList.remove("fixed");
    }
  }

  function scrollHandler() {
    if (window.scrollY > 100) {
      articleNav.classList.add("fixed");
    } else {
      articleNav.classList.remove("fixed");
    }
  }

  // Вызываем функцию при загрузке страницы и изменении размера окна
  window.addEventListener("load", checkWindowWidth);
  window.addEventListener("resize", checkWindowWidth);

  // Закрытие панели
  articleNavClose.addEventListener("click", () => {
    articleNav.classList.remove("fixed");
  });

  articleNavlinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Удаление класса active у всех ссылок
      articleNavlinks.forEach((link) => link.classList.remove("active"));

      // Добавление класса active только к текущей ссылке
      this.classList.add("active");

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Скролл к блоку с учетом высоты панели
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    });
  });

  // Закрытие панели
  articleNavClose.addEventListener("click", () => {
    articleNav.classList.remove("fixed");
  });

  /* -------------------  Mобильная версия -------------------- */
  const articleNavBtnMob = document.querySelector(".art-nav-mobbtn");
  const articleNavCloseMob = document.querySelector(".article-nav__close-mob");

  function addActiveClassToArticleNav() {
    articleNav.classList.add("active");
    document.body.style.width = `calc(100vw - ${
      window.innerWidth - document.documentElement.clientWidth
    }px)`;
    document.body.style.overflow = "hidden";
  }

  function removeActiveClassFromArticleNav() {
    articleNav.classList.remove("active");
    document.body.style.overflow = "";
    document.body.style.width = "";
  }

  function handleButtonClick() {
    if (window.innerWidth <= 1024) {
      addActiveClassToArticleNav();
    }
  }

  function handleOutsideClick(event) {
    if (
      !articleNav.contains(event.target) &&
      !articleNavBtnMob.contains(event.target)
    ) {
      removeActiveClassFromArticleNav();
    }
  }
  articleNavBtnMob.addEventListener("click", handleButtonClick);
  document.addEventListener("click", handleOutsideClick);

  // Закрытие панели
  articleNavCloseMob.addEventListener("click", () => {
    articleNav.classList.remove("active");
    document.body.style.overflow = "";
    document.body.style.width = "";
  });
  //! End Scripts
});
