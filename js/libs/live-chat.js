"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  const liveChat = document.querySelector(".live-chat");
  const liveChatClose = document.querySelector(".live-chat__close");

  // закрытие чата по крестику
  liveChatClose.addEventListener("click", function () {
    liveChat.classList.remove("active");
    document.body.style.overflow = "";
    document.body.style.width = "";
  });

  // Открытия чата по кнопкам чата
  const chatOpenBtns = document.querySelectorAll(".chat-open");
  const privatGallery = document.querySelector(".gallery-private");

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
  const historyItem = document.querySelectorAll(".chat-history__item");

  historyItem.forEach((item) => {
    item.addEventListener("click", () => {
      liveChat.classList.add("active");
      document.body.style.width = `calc(100vw - ${
        window.innerWidth - document.documentElement.clientWidth
      }px)`;
      document.body.style.overflow = "hidden";
    });
  });

  // Закрытие чата при клике вне его области
  function closeChat(e) {
    const isChatElement =
      liveChat.contains(e.target) || liveChatClose.contains(e.target);
    const isChatOpenButton = Array.from(chatOpenBtns).some((button) =>
      button.contains(e.target)
    );
    const isHistoryItem = Array.from(historyItem).some((item) =>
      item.contains(e.target)
    );

    if (
      !isChatElement &&
      !isChatOpenButton &&
      !isHistoryItem &&
      liveChat.classList.contains("active")
    ) {
      liveChat.classList.remove("active");
      document.body.style.overflow = "";
      document.body.style.width = "";
    }
  }

  liveChat.addEventListener("click", (e) => closeChat(e));

  // Закрытие чата при клике вне его области
  document.addEventListener("click", (e) => closeChat(e));

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
