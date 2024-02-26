"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

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

  /* ------------------- Modal Susspend -------------------- */
  const modalSuspend = document.querySelector(".modal-suspend");
  const accountSuspendBtn = document.getElementById("accountSuspendBtn");
  const accountSuspend = document.getElementById("accountSuspend");
  const linkAccountDelete = document.getElementById("link-accountDelete");
  const accountSuspendSuccess = document.getElementById(
    "accountSuspendSuccess"
  );
  const linkAccountSuspend = document.getElementById("link-accountSuspend");
  const accountDelete = document.getElementById("accountDelete");
  const accountDeleteBtn = document.getElementById("accountDeleteBtn");
  const accountDeleteSuccess = document.getElementById("account-deleteSuccess");
  const modalOk = document.querySelectorAll(".modal-ok");

  accountSuspendBtn.addEventListener("click", () => {
    accountSuspend.classList.remove("active");
    accountSuspendSuccess.classList.add("active");
  });

  linkAccountDelete.addEventListener("click", () => {
    accountSuspend.classList.remove("active");
    accountDelete.classList.add("active");
  });

  linkAccountSuspend.addEventListener("click", () => {
    accountDelete.classList.remove("active");
    accountSuspend.classList.add("active");
  });

  accountDeleteBtn.addEventListener("click", () => {
    accountDelete.classList.remove("active");
    accountDeleteSuccess.classList.add("active");
  });

  modalOk.forEach((button) => {
    button.addEventListener("click", () => {
      modalSuspend.classList.remove("active");
      document.body.style.overflow = "";
      document.body.style.width = "";
    });
  });

  /* ------------------- ForgotPassword -------------------- */
  const modalPassword = document.querySelector(".modal-password");
  const modalForgotPassword = document.getElementById("forgotPassword");
  const forgotPasswordLink = document.querySelector(".forgot-password__link");
  const forgotPasswordForm = document.getElementById("forgot-passwordForm");
  const forgotPasswordSend = document.getElementById("forgotPasswordSend");
  const forgotPasswordSuccess = document.getElementById(
    "forgot-passwordSuccess"
  );
  const forgotPasswordOk = document.getElementById("modal-forgotOk");

  forgotPasswordLink.addEventListener("click", () => {
    modalPassword.classList.remove("active");
    modalForgotPassword.classList.add("active");
  });

  forgotPasswordSend.addEventListener("click", () => {
    forgotPasswordForm.classList.remove("active");
    forgotPasswordSuccess.classList.add("active");
  });

  forgotPasswordSend.addEventListener("click", () => {
    forgotPasswordForm.classList.remove("active");
    forgotPasswordSuccess.classList.add("active");
  });

  forgotPasswordOk.addEventListener("click", () => {
    modalForgotPassword.classList.remove("active");
    document.body.style.overflow = "";
    document.body.style.width = "";
  });

  //!! End Scripts
});
