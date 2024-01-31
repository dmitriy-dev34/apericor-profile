"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  const dropdownBtns = document.querySelectorAll(".dropdown-trigger");
  const dropdowns = document.querySelectorAll(".dropdown");
  const dropdownItems = document.querySelectorAll(".dropdown__item");

  dropdownBtns.forEach((button) => {
    button.addEventListener("click", function (event) {
      const dropdown = this.nextElementSibling;
      dropdown.classList.toggle("active");
      button.classList.toggle("active");
      event.stopPropagation();
    });
  });

  dropdownItems.forEach((item) => {
    item.addEventListener("click", function () {
      dropdownItems.forEach((item) => {
        item.classList.remove("active");
      });
      this.classList.add("active");

      const dropdown = this.closest(".dropdown");
      const button = dropdown.previousElementSibling;
      button.classList.remove("active");
      dropdown.classList.remove("active");
    });
  });

  document.addEventListener("click", function (event) {
    const isDropdownItem = event.target.classList.contains("dropdown__item");
    const isDropdownBtn = event.target.classList.contains("dropdown-btn");

    if (!isDropdownItem && !isDropdownBtn) {
      dropdownBtns.forEach((button) => {
        button.classList.remove("active");
        const dropdown = button.nextElementSibling;
        dropdown.classList.remove("active");
      });

      dropdownItems.forEach((item) => {
        item.classList.remove("active");
      });
    }
  });

  //!! End Scripts
});
