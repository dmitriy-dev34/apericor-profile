"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  /* ------------------- Mail Options -------------------- */
  const mailOption = document.querySelectorAll(".mail-option");
  const mailDropdownItems = document.querySelectorAll(".dropdown__item");

  mailOption.forEach((button) => {
    button.addEventListener("click", function (event) {
      const dropdown = this.nextElementSibling;
      dropdown.classList.toggle("active");
      button.classList.toggle("active");
      event.stopPropagation();
    });
  });

  mailDropdownItems.forEach((item) => {
    item.addEventListener("click", function () {
      mailDropdownItems.forEach((item) => {
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
    const isDropdownBtn = event.target.classList.contains("mail-option");

    if (!isDropdownItem && !isDropdownBtn) {
      mailOption.forEach((button) => {
        button.classList.remove("active");
        const dropdown = button.nextElementSibling;
        dropdown.classList.remove("active");
      });

      mailDropdownItems.forEach((item) => {
        item.classList.remove("active");
      });
    }
  });

  /* ------------------- Select .corespond-item -------------------- */
  const checkboxes = document.querySelectorAll(
    ".correspond-item input[type='checkbox']"
  );

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const correspondItem = this.closest(".correspond-item");

      if (this.checked) {
        correspondItem.classList.add("selected");
      } else {
        correspondItem.classList.remove("selected");
      }
    });
  });

  //!! End Scripts
});
