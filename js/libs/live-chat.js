"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  const liveChat = document.querySelector(".live-chat");
  const liveChatClose = document.querySelector(".live-chat__close");

  // закрытие чата по крестику
  liveChatClose.addEventListener("click", function () {
    liveChat.classList.remove("active");
  });

  // Открытия чата по кнопкам чата
  const chatOpenBtns = document.querySelectorAll(".chat-open");
  const privatGallery = document.querySelector(".gallery-private");

  chatOpenBtns.forEach((button) => {
    button.addEventListener("click", () => {
      liveChat.classList.add("active");
      privatGallery.classList.remove("active");
      document.body.style.overflow = "";
      document.body.style.width = "";
    });
  });

  // Открытия чата по кнопкам чата
  const historyItem = document.querySelectorAll(".chat-history__item");

  historyItem.forEach((item) => {
    item.addEventListener("click", () => {
      liveChat.classList.add("active");
    });
  });

  // EmojiPicker для liveChat
  const emojiPickerLiveChat = new EmojiPicker({
    trigger: [
      {
        selector: "#smile-livechat",
        insertInto: ".live-chat__textarea",
      },
    ],
    closeButton: true,
    position: "topLeft",
    // specialButtons: green
  });

  //!! End Scripts
});
