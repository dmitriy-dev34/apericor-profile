"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts
  /* ------------------- selectsGenders -------------------- */

  const selectsGenders = document.querySelectorAll(".select-gender");

  selectsGenders.forEach((select) => {
    const selectGenderInput = select.querySelector(".select-gender__input");
    const selectGenderList = select.querySelector(".select-gender__list");
    const selectGenderItems = select.querySelectorAll(".select-gender__item");

    selectGenderInput.addEventListener("click", function (event) {
      event.stopPropagation();

      selectsGenders.forEach((otherSelect) => {
        if (otherSelect !== select) {
          otherSelect.classList.remove("open");
        }
      });

      select.classList.toggle("open");
      selectGenderInput.classList.add("selected");
    });

    selectGenderItems.forEach((item) => {
      item.addEventListener("click", function (event) {
        event.stopPropagation();

        selectGenderItems.forEach((i) => i.classList.remove("selected"));
        this.classList.add("selected");

        const itemName = this.querySelector(".select-gender__name").textContent;
        const itemIconSrc = this.querySelector(
          ".select-gender__icon"
        ).getAttribute("src");

        selectGenderInput.innerHTML = `<img class="select-gender__icon" src="${itemIconSrc}" alt="${itemName}">`;
        selectGenderInput.insertAdjacentHTML(
          "beforeend",
          `<span class="select-gender__name">${itemName}</span>`
        );

        select.classList.remove("open");
      });
    });
  });

  document.addEventListener("click", function () {
    selectsGenders.forEach((select) => {
      select.classList.remove("open");
    });
  });
  //!! End Scripts
});
