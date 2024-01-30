"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  const liveChat = document.querySelector(".live-chat");
  const liveChatClose = document.querySelector(".live-chat__close");
  const chatOpenBtns = document.querySelectorAll(".chat-open");
  const privatGallery = document.querySelector(".gallery-private");
  const historyItem = document.querySelectorAll(".chat-history__item");
  const emojiContainer = document.querySelector(".fg-emoji-container");

  // закрытие чата по крестику
  liveChatClose.addEventListener("click", function () {
    liveChat.classList.remove("active");
    document.body.style.overflow = "";
    document.body.style.width = "";
  });

  // Открытия чата по кнопкам чата
  chatOpenBtns.forEach((button) => {
    button.addEventListener("click", () => {
      liveChat.classList.add("active");
      privatGallery.classList.remove("active");
      document.body.style.width = `calc(100vw - ${
        window.innerWidth - document.documentElement.clientWidth
      }px)`;
      document.body.style.overflow = "hidden";
    });
  });

  // Открытия чата по истории в баннере
  historyItem.forEach((item) => {
    item.addEventListener("click", () => {
      liveChat.classList.add("active");
      document.body.style.width = `calc(100vw - ${
        window.innerWidth - document.documentElement.clientWidth
      }px)`;
      document.body.style.overflow = "hidden";
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
  });

  //!! End Scripts
});
