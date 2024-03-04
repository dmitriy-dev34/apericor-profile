"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts
  /* ------------------- Select Custom -------------------- */
  const customSelects = document.querySelectorAll(".select");

  customSelects.forEach((select) => {
    const selectTrigger = select.querySelector(".select__trigger");
    const selected = select.querySelector(".select__selected");

    // Создаем скрытое поле
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.className = "select__input";
    selectTrigger.appendChild(hiddenInput);

    // Устанавливаем атрибут name скрытому полю из select__selected
    hiddenInput.name = selected.getAttribute("name");

    // Устанавливаем значение по умолчанию из span в скрытое поле
    hiddenInput.value = selected.textContent;

    selectTrigger.addEventListener("click", () => {
      select.classList.toggle("open");
    });

    document.addEventListener("click", (event) => {
      if (!select.contains(event.target)) {
        select.classList.remove("open");
      }
    });

    select.addEventListener("click", (event) => {
      if (event.target.classList.contains("select__option")) {
        selected.textContent = event.target.textContent;
        hiddenInput.value = event.target.textContent;
        select.classList.remove("open");
      }
    });
  });
  //!! End Scripts
});
