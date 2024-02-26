"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  const headerSeoOverlay = document.querySelector(".seo-submenu-overlay");
  const itemInternational = document.querySelector(".item-international");
  const itemSeoSubmenus = document.querySelectorAll(".m-item-arrow");
  const itemMoreInfo = document.querySelector(".item-moreinfo");
  const submenuInternational = document.querySelector(".submenu-international");
  const submenuMoreInfo = document.querySelector(".submenu-moreinfo");
  const submenuClose = document.querySelector(".seo-submenu__close");

  function closeAllSubmenus() {
    submenuInternational.classList.remove("active");
    submenuMoreInfo.classList.remove("active");
    document.body.classList.remove("lock-scroll");
    itemSeoSubmenus.forEach((item) => {
      item.classList.remove("active");
    });
    headerSeoOverlay.classList.remove("active");
  }

  itemInternational.addEventListener("click", () => {
    if (!submenuInternational.classList.contains("active")) {
      closeAllSubmenus();
      submenuInternational.classList.add("active");
      headerSeoOverlay.classList.add("active");
      itemInternational.classList.add("active");
      document.body.classList.add("lock-scroll");
    } else {
      closeAllSubmenus();
    }
  });

  itemMoreInfo.addEventListener("click", () => {
    if (!submenuMoreInfo.classList.contains("active")) {
      closeAllSubmenus();
      submenuMoreInfo.classList.add("active");
      headerSeoOverlay.classList.add("active");
      itemMoreInfo.classList.add("active");
      document.body.classList.add("lock-scroll");
    } else {
      closeAllSubmenus();
    }
  });

  submenuClose.addEventListener("click", () => {
    closeAllSubmenus();
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".header-blog__menu")) {
      closeAllSubmenus();
    }
  });

  //! End Scripts
});
