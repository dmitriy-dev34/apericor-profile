"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  /* ------------------- mob-nav -------------------- */
  const navMob = document.querySelector(".mob-nav");

  // mob-nav скрываем / показываем при скроле
  let lastScroll = window.pageYOffset;
  let ticking = false;

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
          // Скрываем навигацию при прокрутке вниз
          navMob.classList.add("hide");
        } else {
          // Показываем навигацию при прокрутке вверх или когда скролл останавливается
          navMob.classList.remove("hide");
        }
        lastScroll = currentScroll <= 0 ? 0 : currentScroll; // Для поддержки прокрутки вверх в Safari
        ticking = false;
      });

      ticking = true;
    }
  });

  const navItems = document.querySelectorAll("mob-nav__item");
  const navItemInfo = document.getElementById("item-info");
  const navItemMedia = document.getElementById("item-media");
  const navItemPosts = document.getElementById("item-posts");
  const navItemChat = document.getElementById("item-chat");

  const profileMainInfo = document.querySelector(".profile__main-info");
  const profileInterview = document.querySelector(".profile__interview");
  const profileMedia = document.querySelector(".profile__media");
  const profilePosts = document.querySelector(".profile__posts");
  const paddingBlockTop = 92; // Высота фиксированного хедера

  navItemInfo.addEventListener("click", () => {
    profileMainInfo.classList.add("active");
    profileInterview.classList.add("active");
    profileMedia.classList.remove("active");
    profilePosts.classList.remove("active");
    navItemInfo.classList.add("active");
    navItemMedia.classList.remove("active");
    navItemPosts.classList.remove("active");
    navItemChat.classList.remove("active");
    const scrollToElement =
      profileMainInfo.getBoundingClientRect().top +
      window.scrollY -
      paddingBlockTop;
    window.scrollTo({ top: scrollToElement, behavior: "smooth" });
  });

  navItemMedia.addEventListener("click", () => {
    profileMedia.classList.add("active");
    profileMainInfo.classList.remove("active");
    profileInterview.classList.remove("active");
    profilePosts.classList.remove("active");
    navItemMedia.classList.add("active");
    navItemInfo.classList.remove("active");
    navItemPosts.classList.remove("active");
    navItemChat.classList.remove("active");
    const scrollToElement =
      profileMedia.getBoundingClientRect().top +
      window.scrollY -
      paddingBlockTop;
    window.scrollTo({ top: scrollToElement, behavior: "smooth" });
  });

  navItemPosts.addEventListener("click", () => {
    profilePosts.classList.add("active");
    profileMainInfo.classList.remove("active");
    profileInterview.classList.remove("active");
    profileMedia.classList.remove("active");
    navItemPosts.classList.add("active");
    navItemInfo.classList.remove("active");
    navItemMedia.classList.remove("active");
    navItemChat.classList.remove("active");
    const scrollToElement =
      profilePosts.getBoundingClientRect().top +
      window.scrollY -
      paddingBlockTop;
    window.scrollTo({ top: scrollToElement, behavior: "smooth" });
  });

  /* ------------------- profile-moboptions -------------------- */
  const profileMobOptions = document.querySelector(".profile-moboptions");

  if (profileMobOptions) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        profileMobOptions.classList.add("scrolled");
      } else {
        profileMobOptions.classList.remove("scrolled");
      }
    });
  }

  //!! End Scripts
});
