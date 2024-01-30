"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  const colorItems = document.querySelectorAll(".flowers-colors__item");
  const quantityItems = document.querySelectorAll(".quantity-flowers__item");
  const counterInput = document.querySelector(".flowers-counter__input");
  const flowerQuantitySpan = document.querySelector(".flower-quantity");
  const flowerColorSpan = document.querySelector(".flower-color");

  colorItems.forEach((item) => {
    item.addEventListener("click", function () {
      const color = this.getAttribute("data-color");
      colorItems.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");

      // Обновляем текст в спане для цвета
      flowerColorSpan.textContent = color;
    });
  });

  quantityItems.forEach((item) => {
    item.addEventListener("click", function () {
      const value = this.textContent.trim();
      counterInput.value = value;
      quantityItems.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");

      // Обновляем текст в спане для количества
      flowerQuantitySpan.textContent = value;
    });
  });

  const btnPlus = document.getElementById("btn-plus");
  const btnMinus = document.getElementById("btn-minus");

  btnPlus.addEventListener("click", function () {
    counterInput.value = +counterInput.value + 2;
    updateActiveItem(counterInput.value);
  });

  btnMinus.addEventListener("click", function () {
    const currentValue = +counterInput.value;
    const newValue = Math.max(3, currentValue - 2);
    counterInput.value = newValue;
    updateActiveItem(newValue);
  });

  function updateActiveItem(value) {
    quantityItems.forEach((item) => item.classList.remove("active"));
    const activeItem = [...quantityItems].find(
      (item) => item.textContent.trim() === value.toString()
    );
    if (activeItem) {
      activeItem.classList.add("active");
    }

    // Обновляем текст в спане для количества
    flowerQuantitySpan.textContent = value;
  }
  //!! End Scripts
});
