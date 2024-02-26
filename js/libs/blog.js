"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  /* ------------------- Footer Items Show is Mobile -------------------- */
  const footerToggle = document.querySelector(".footer__toggle");
  const footerTopContainer = document.querySelector(".footer__top-container");
  const footerMenuItems = document.querySelectorAll(".footer__menu-item");

  footerToggle.addEventListener("click", function () {
    footerMenuItems.forEach((item) => {
      item.classList.toggle("show");
    });
    footerToggle.classList.toggle("active");
    footerTopContainer.classList.toggle("open");
  });

  // /* ------------------- btnScrollTop -------------------- */
  const btnScrollTop = document.getElementById("btnScrollTop");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btnScrollTop.classList.add("show");
    } else {
      btnScrollTop.classList.remove("show");
    }
  }
  btnScrollTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  const blogBody = document.querySelector(".blog-body");

  /* ------------------- Header Blog Menu Mob -------------------- */
  const blogHeaderBurger = document.querySelector(".header-blog__burger");
  const blogNav = document.querySelector(".header-blog__nav");
  const blogNavOverlay = document.querySelector(".header-blog__overlay");

  function toggleMenu() {
    blogHeaderBurger.classList.toggle("active");
    blogNav.classList.toggle("active");
    blogNavOverlay.classList.toggle("active");
    toggleLockScroll();
  }

  function toggleLockScroll() {
    blogBody.classList.toggle("lock-scroll");
  }

  function closeMenu() {
    toggleLockScroll();
    blogNav.classList.remove("active");
    blogHeaderBurger.classList.remove("active");
    blogNavOverlay.classList.remove("active");
  }

  if (blogNav && blogHeaderBurger) {
    blogHeaderBurger.addEventListener("click", toggleMenu);

    blogNavOverlay.addEventListener("click", closeMenu);

    window.addEventListener("click", (e) => {
      const target = e.target;
      if (
        !target.closest(".header-blog__burger") &&
        !target.closest(".header-blog__nav") &&
        !target.closest(".header-blog__overlay") &&
        blogNav.classList.contains("active")
      ) {
        closeMenu();
      }
    });
  }

  /* ------------------- Blog Search -------------------- */
  const blogSearchBtn = document.querySelector(".header-blog__search");
  const blogSearch = document.querySelector(".blog-search");
  const blogSearchOverlay = document.querySelector(".blog-search__overlay");
  const blogSearchClose = document.querySelector(".blog-search__close");

  // Open or close blog-search
  blogSearchBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    blogCategories.classList.remove("active");
    menuItemCategories.classList.remove("active");
    blogSearch.classList.toggle("active");
    blogSearchOverlay.classList.toggle("active");
    blogSearchBtn.classList.toggle("active");
    blogBody.classList.add("lock-scroll");
  });

  // Close blog-search on button click
  blogSearchClose.addEventListener("click", (event) => {
    event.stopPropagation();
    closeBlogSearch();
  });

  // Close blog-search on overlay click
  blogSearchOverlay.addEventListener("click", (event) => {
    event.stopPropagation();
    closeBlogSearch();
  });

  function closeBlogSearch() {
    blogSearch.classList.remove("active");
    blogSearchOverlay.classList.remove("active");
    blogSearchBtn.classList.remove("active");
    blogBody.classList.remove("lock-scroll");
  }

  /* ------------------- Blog Categories -------------------- */
  const menuItemCategories = document.querySelector(".menu-categories");
  const blogCategories = document.querySelector(".blog-categories");
  const blogCategoriesClose = document.querySelector(".blog-categories__close");

  // Open or close blog-categories
  menuItemCategories.addEventListener("click", (event) => {
    event.stopPropagation();
    closeBlogSearch();
    blogCategories.classList.toggle("active");
    menuItemCategories.classList.add("active");
  });

  // Close blog-categories on button click
  blogCategoriesClose.addEventListener("click", (event) => {
    event.stopPropagation();
    blogCategories.classList.remove("active");
    menuItemCategories.classList.remove("active");
  });

  // Close blog-search or blog-categories on outside click
  document.addEventListener("click", (event) => {
    const targetElement = event.target;
    if (
      !blogSearch.contains(targetElement) &&
      !blogSearchBtn.contains(targetElement) &&
      !blogCategories.contains(targetElement) &&
      !menuItemCategories.contains(targetElement)
    ) {
      closeBlogSearch();
    }
  });

  /* ------------------- Blog Header Fixed -------------------- */
  const headerBlogFixed = document.querySelector(".header-blog--fixed");
  const headerBlogHeight = headerBlogFixed.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 64) {
      headerBlogFixed.classList.add("fixed");
      document.body.style.paddingTop = headerBlogHeight + "px";
    } else {
      headerBlogFixed.classList.remove("fixed");
      document.body.style.paddingTop = 0;
    }
  });

  //! End Scripts
});
