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
    body.classList.add("lock-scroll");
  }

  function closeModal(e) {
    if (
      e.target.classList.contains("modal__close") ||
      e.target.closest(".modal__close") ||
      e.target.classList.contains("modal__overlay")
    ) {
      e.target.closest(".modal").classList.remove("active");
      body.classList.remove("lock-scroll");
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
        body.classList.remove("lock-scroll");
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
      body.classList.remove("lock-scroll");
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
      body.classList.remove("lock-scroll");
      document.body.style.width = "";

      modalBlock.classList.add("active");
      document.body.style.width = `calc(100vw - ${
        window.innerWidth - document.documentElement.clientWidth
      }px)`;

      body.classList.add("lock-scroll");
    });
  }

  //!! End Scripts
});
