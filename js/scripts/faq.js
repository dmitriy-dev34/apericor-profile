"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  /* ------------------- Open / Close Faq -------------------- */
  const faqItems = document.querySelectorAll(".faq__item");
  const faqHeads = document.querySelectorAll(".faq__head");

  faqHeads.forEach((faqHead, index) => {
    faqHead.addEventListener("click", () => {
      faqItems[index].classList.toggle("open");
    });
  });

  /* ------------------- faq__question -------------------- */
  const questionYes = document.querySelectorAll(".faq__question-yes");
  const questionNo = document.querySelectorAll(".faq__question-no");
  const questionStep1 = document.querySelectorAll(".question-step1");
  const questionStep2 = document.querySelectorAll(".question-step2");
  const questionStep3 = document.querySelectorAll(".question-step3");
  const faqItem = document.querySelectorAll(".faq__item");

  questionYes.forEach((button, index) => {
    button.addEventListener("click", () => {
      questionStep1[index].classList.remove("active");
      questionStep3[index].classList.add("active");

      setTimeout(() => {
        faqItem[index].classList.remove("open");
      }, 2000);
    });
  });

  questionNo.forEach((button, index) => {
    button.addEventListener("click", () => {
      questionStep1[index].classList.remove("active");
      questionStep2[index].classList.add("active");
    });
  });

  /* ------------------- Scroll to faq__item -------------------- */
  const faqNavLinks = document.querySelectorAll(".faq-nav__link");
  faqNavLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight =
          document.querySelector(".header-fixed").offsetHeight;
        const targetOffset = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        });
        targetElement.classList.add("open");
      }
    });
  });

  //! End Scripts
});
