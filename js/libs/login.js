"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  //  Select Gender
  const iAmRadios = document.querySelectorAll('input[name="i-am"]');
  const lookingForRadios = document.querySelectorAll(
    'input[name="looking-for"]'
  );

  function setOppositeGender(source, target) {
    source.addEventListener("change", function () {
      if (this.checked) {
        target.checked = true;
      }
    });
  }
  setOppositeGender(genderWoman, genderMan2);
  setOppositeGender(genderMan, genderWoman2);
  setOppositeGender(genderWoman2, genderMan);
  setOppositeGender(genderMan2, genderWoman);

  // Password Show
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
  const linkSignIn = document.getElementById("linkSignIn");
  const linkSignIn2 = document.getElementById("linkSignIn2");
  const linkSignIn3 = document.getElementById("linkSignIn3");
  const forgotPassword = document.getElementById("forgotPassword");

  // Sign Up Steps
  const signUpFirst = document.querySelector(".form-signup__first");
  const signUpLast = document.querySelector(".form-signup__last");
  const signUpNext = document.getElementById("signupNext");
  const signUpPrev = document.getElementById("signupPrev");

  // Sign Up
  linkSignUp.addEventListener("click", () => {
    formSignIn.classList.remove("active");
    formSignUp.classList.add("active");
  });

  // Sign Up - first to last
  signUpNext.addEventListener("click", () => {
    signUpFirst.classList.remove("active");
    signUpLast.classList.add("active");
  });

  // Sign Up - last to first
  signUpPrev.addEventListener("click", () => {
    signUpLast.classList.remove("active");
    signUpFirst.classList.add("active");
  });

  // Sign Up - last to Sign In
  linkSignIn2.addEventListener("click", () => {
    formSignUp.classList.remove("active");
    formSignIn.classList.add("active");
  });

  // Sign In
  linkSignIn.addEventListener("click", () => {
    formSignUp.classList.remove("active");
    formSignIn.classList.add("active");
  });

  // Forgot Password
  forgotPassword.addEventListener("click", () => {
    formSignIn.classList.remove("active");
    formPassword.classList.add("active");
  });

  // Forgot to Sign In
  linkSignIn3.addEventListener("click", () => {
    formPassword.classList.remove("active");
    formSignIn.classList.add("active");
  });

  //!! End Scripts
});
