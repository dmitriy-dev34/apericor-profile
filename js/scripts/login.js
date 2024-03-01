"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  /* ------------------- Custom Select -------------------- */
  const customSelects = document.querySelectorAll(".select");

  customSelects.forEach((select) => {
    const selectTrigger = select.querySelector(".select__trigger");
    const optionsList = select.querySelector(".select__options");
    const options = optionsList.querySelectorAll(".select__option");
    const selected = select.querySelector(".select__selected");

    selectTrigger.addEventListener("click", () => {
      select.classList.toggle("open");
    });

    document.addEventListener("click", (event) => {
      if (!select.contains(event.target)) {
        select.classList.remove("open");
      }
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        selected.textContent = option.textContent;
        options.forEach((otherOption) => {
          otherOption.classList.remove("selected");
        });
        option.classList.add("selected");
        select.classList.remove("open");
      });
    });
  });

  // Forms
  const formSignIn = document.querySelector(".form-signin");
  const formSignUp = document.querySelector(".form-signup");
  const formPassword = document.querySelector(".form-password");
  const linkSignUp = document.getElementById("linkSignUp");
  const linkSignIn1 = document.getElementById("linkSignIn1");
  const linkSignIn2 = document.getElementById("linkSignIn2");
  const linkSignIn3 = document.getElementById("linkSignIn3");
  const linkSignIn4 = document.getElementById("linkSignIn4");
  const forgotPassword = document.getElementById("forgotPassword");

  // Sign Up Steps
  const signUpFirst = document.querySelector(".form-signup__first");
  const signUpSecond = document.querySelector(".form-signup__second");
  const signUpLast = document.querySelector(".form-signup__last");
  const signUpNext1 = document.getElementById("signupNext1");
  const signUpNext2 = document.getElementById("signupNext2");
  const signUpPrev1 = document.getElementById("signupPrev1");
  const signUpPrev2 = document.getElementById("signupPrev2");

  /* ------------------- Sign In -------------------- */

  //! SignIn to Password
  forgotPassword.addEventListener("click", () => {
    formSignIn.classList.remove("active");
    formPassword.classList.add("active");
  });

  //! Password to SignIn
  linkSignIn1.addEventListener("click", () => {
    formPassword.classList.remove("active");
    formSignIn.classList.add("active");
  });

  /* ------------------- Sign Up -------------------- */
  //! SignUp first step
  linkSignUp.addEventListener("click", () => {
    formSignIn.classList.remove("active");
    formSignUp.classList.add("active");
  });

  //! SignUp - second step
  signUpNext1.addEventListener("click", () => {
    signUpFirst.classList.remove("active");
    signUpSecond.classList.add("active");
  });

  //! SignUp - last step
  signUpNext2.addEventListener("click", () => {
    signUpSecond.classList.remove("active");
    signUpLast.classList.add("active");
  });

  //! SignUp - second to first step
  signUpPrev1.addEventListener("click", () => {
    signUpSecond.classList.remove("active");
    signUpFirst.classList.add("active");
  });

  //! SignUp - last to second step
  signUpPrev2.addEventListener("click", () => {
    signUpLast.classList.remove("active");
    signUpSecond.classList.add("active");
  });

  /* ------------------- Sign Up to Sign In -------------------- */

  //! SignUp - first to SignIn
  linkSignIn2.addEventListener("click", () => {
    formSignUp.classList.remove("active");
    formSignIn.classList.add("active");
  });

  //! SignUp - second to SignIn
  linkSignIn3.addEventListener("click", () => {
    formSignUp.classList.remove("active");
    formSignIn.classList.add("active");
  });

  //! SignUp - last to SignIn
  linkSignIn4.addEventListener("click", () => {
    formSignUp.classList.remove("active");
    formSignIn.classList.add("active");
  });

  /* ------------------- Password Show -------------------- */
  const inputsPassword = document.querySelectorAll(".input-password");
  const passwordIcons = document.querySelectorAll(".password-icon");

  if (inputsPassword.length === passwordIcons.length) {
    passwordIcons.forEach((icon, index) => {
      icon.addEventListener("click", function () {
        inputsPassword[index].type =
          inputsPassword[index].type === "password" ? "text" : "password";
        icon.classList.toggle("password-show");
      });
    });
  }

  //!! End Scripts
});
