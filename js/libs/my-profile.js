"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  /* ------------------- Edit Looking -------------------- */
  const editLooking = document.getElementById("edit-looking");
  const dropdownLooking = document.querySelector(".dropdown-opt");
  const tagsList = document.querySelector(".profile__tags");
  const checkboxes = document.querySelectorAll(".dropdown-opt__input");
  const saveBtn = document.querySelector(".dropdown-opt__btn");

  function updateTags() {
    tagsList.innerHTML = ""; // Очищаем текущие теги

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const labelText =
          checkbox.nextElementSibling.nextElementSibling.textContent;
        const newTag = document.createElement("li");
        newTag.classList.add("tags-list__item");
        newTag.textContent = labelText;
        tagsList.appendChild(newTag);
      }
    });
  }

  editLooking.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownLooking.classList.toggle("active");
  });

  saveBtn.addEventListener("click", () => {
    updateTags();
    dropdownLooking.classList.remove("active");
  });

  window.addEventListener("click", (e) => {
    const target = e.target;
    if (
      !target.closest("#edit-looking") &&
      !target.closest(".dropdown-opt") &&
      dropdownLooking.classList.contains("active")
    ) {
      dropdownLooking.classList.remove("active");
    }
  });

  /* ------------------- Delete Specific Tags -------------------- */
  const specificTags = document.querySelector(".profile-specific__tags");

  specificTags.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("specific-delete")) {
      // Удаляем родительский элемент тега
      target.closest(".tags-list__item").remove();
    }
  });

  /* ------------------- Edit Status -------------------- */
  const editStatusBtn = document.querySelector(".edit-status__btn");
  const editStatusInput = document.querySelector(".edit-status__input");

  let isEditing = false;

  editStatusBtn.addEventListener("click", function () {
    if (!isEditing) {
      // Включаем режим редактирования
      editStatusInput.removeAttribute("disabled");
      editStatusInput.focus();
      editStatusBtn.textContent = "check_circle";
      editStatusBtn.classList.add("active");
    } else {
      // Выключаем режим редактирования
      editStatusInput.setAttribute("disabled", true);
      editStatusBtn.textContent = "edit";
      editStatusBtn.classList.remove("active");
    }

    isEditing = !isEditing;
  });

  /* ------------------- Upload Buttons -------------------- */
  const uploadInputs = document.querySelectorAll(".upload-btn__input");

  const MAX_CHARACTERS = 10; // Максимальное количество символов имени выбранного файла

  uploadInputs.forEach(function (input) {
    input.addEventListener("change", function () {
      const fileName = this.value.split("\\").pop(); // Получаем имя файла
      const label =
        this.closest(".upload-btn").querySelector(".upload-btn__label");

      if (fileName) {
        let partialName = fileName.split(".")[0]; // Берем часть слова до точки

        // Обрезаем текст, если превышено максимальное количество символов
        if (partialName.length > MAX_CHARACTERS) {
          partialName = partialName.substring(0, MAX_CHARACTERS) + "...";
        }

        label.textContent = partialName + "."; // Добавляем точку в конце
      } else {
        label.textContent = "Add photo";
      }
    });
  });

  /* ------------------- EmojiPicker для NewsPost -------------------- */
  const emojiPickerNewsPost = new EmojiPicker({
    trigger: [
      {
        selector: "#smile-newspost",
        // insertInto: ".form-post__field-input",
        insertInto: [".form-post__field-input"],
      },
    ],
    closeButton: true,
    // position: "topRight",
  });

  /* ------------------- Open / Close dropdown features-options to modal -------------------- */
  const featuresOptionsBtns = document.querySelectorAll(
    ".features-options__btn"
  );
  const featuresDropdowns = document.querySelectorAll(
    ".features-options__dropdown"
  );

  document.addEventListener("click", (event) => {
    featuresOptionsBtns.forEach((button, index) => {
      const dropdown = featuresDropdowns[index];

      if (
        event.target !== button &&
        !button.contains(event.target) &&
        event.target !== dropdown &&
        !dropdown.contains(event.target)
      ) {
        dropdown.classList.remove("active");
        button.classList.remove("active");
      }
    });
  });

  featuresOptionsBtns.forEach((button, index) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();

      featuresOptionsBtns.forEach((otherButton, otherIndex) => {
        if (otherIndex !== index) {
          featuresDropdowns[otherIndex].classList.remove("active");
          otherButton.classList.remove("active");
        }
      });

      const currentDropdown = featuresDropdowns[index];
      currentDropdown.classList.toggle("active");
      button.classList.toggle(
        "active",
        currentDropdown.classList.contains("active")
      );
    });
  });

  //!! End Scripts
});
