"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts
  /* ------------------- Select Gender Custom -------------------- */
  const selectsGenders = document.querySelectorAll(".select-gender");

  selectsGenders.forEach((select) => {
    const selectGenderTrigger = select.querySelector(".select-gender__trigger");
    const selectGenderInput = select.querySelector(".select-gender__input");
    const selectGenderList = select.querySelector(".select-gender__list");
    const selectGenderItems = select.querySelectorAll(".select-gender__item");

    // Создаем скрытое поле внутри trigger
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.className = "select-gender__hidden-input";
    selectGenderTrigger.appendChild(hiddenInput);

    // Устанавливаем атрибут name скрытому полю из select-gender__input
    hiddenInput.name = selectGenderInput.getAttribute("name");

    selectGenderTrigger.addEventListener("click", function (event) {
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

        // Обновляем значение скрытого поля при выборе опции
        hiddenInput.value = itemName;

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
