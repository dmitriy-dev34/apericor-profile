"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  /* ------------------- Modal -------------------- */
  const modalBtn = document.querySelectorAll(".modal-open");
  const modals = document.querySelectorAll(".modal");
  const body = document.body;

  function openModal(elem) {
    elem.classList.add("active");
    if (hasScrollbar()) {
      body.style.width = `calc(100vw - ${
        window.innerWidth - document.documentElement.clientWidth
      }px)`;
    }
    body.style.overflow = "hidden";
  }

  function closeModal(e) {
    if (
      e.target.classList.contains("modal__close") ||
      e.target.closest(".modal__close") ||
      e.target.classList.contains("modal__overlay")
    ) {
      e.target.closest(".modal").classList.remove("active");
      body.style.overflow = "";
      body.style.width = "";
    }
  }

  function hasScrollbar() {
    return document.body.scrollHeight > window.innerHeight;
  }

  modalBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let data = e.target.dataset.modalOpen;

      modals.forEach((modal) => {
        if (
          modal.dataset.modal == data ||
          modal.dataset.modal ==
            e.target.closest(".modal-open").dataset.modalOpen
        ) {
          openModal(modal);
        }
      });
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => closeModal(e));
  });

  window.addEventListener("keydown", (e) => {
    modals.forEach((modal) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        modal.classList.remove("active");
        body.style.overflow = "";
        body.style.width = "";
      }
    });
  });

  /* ------------------- Закрытие модалки по кнопке .modal-cancel -------------------- */
  const modalCancelBtns = document.querySelectorAll(".modal-cancel");

  modalCancelBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const modalsDelete = document.querySelectorAll(".modal-delete");
      modalsDelete.forEach((modal) => {
        modal.classList.remove("active");
      });
      document.body.style.overflow = "";
      document.body.style.width = "";
    });
  });

  /* ------------------- Modal Report to Modal Block -------------------- */
  const reportBlock = document.querySelector(".report-block");
  const modalReport = document.querySelector(".modal-report");
  const modalBlock = document.querySelector(".modal-block");

  if (reportBlock && modalReport && modalBlock) {
    reportBlock.addEventListener("click", function () {
      modalReport.classList.remove("active");
      document.body.style.overflow = "";
      document.body.style.width = "";

      modalBlock.classList.add("active");
      document.body.style.width = `calc(100vw - ${
        window.innerWidth - document.documentElement.clientWidth
      }px)`;

      document.body.style.overflow = "hidden";
    });
  }

  /* ------------------- Проверка заполнения формы Block Profile -------------------- */
  const formBlockTextarea = document.querySelector(".form-block__textarea");
  const formBlockBtn = document.querySelector(".form-block__btn");

  // Проверяем наличие нужных элементов на странице
  if (formBlockTextarea && formBlockBtn) {
    formBlockBtn.addEventListener("click", function (event) {
      // Проверяем, заполнено ли поле
      if (formBlockTextarea.value.trim() === "") {
        // Если поле не заполнено, добавляем класс 'error' и меняем текст placeholder
        formBlockTextarea.classList.add("error");
        formBlockTextarea.placeholder =
          "You dont! Describe the reason for the blockage!";
        event.preventDefault(); // Отменяем стандартное действие отправки формы
      } else {
        // Если поле заполнено, убираем класс 'error'
        formBlockTextarea.classList.remove("error");
        // Здесь можете добавить код для отправки формы, например, использовать AJAX-запрос или просто разрешить отправку формы стандартным способом
      }
    });
  }

  //!! End Scripts
});
