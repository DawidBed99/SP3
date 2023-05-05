const POPUP = document.querySelector(".popup__info");
const POPUP_CLOSE = document.querySelector(".close");
const POPUP2 = document.querySelector(".popup__info2");
const POPUP_CLOSE2 = document.querySelector(".close2");
const POPUP3 = document.querySelector(".teams");
const POPUP_CLOSE3 = document.querySelector(".close3");
const TAB = document.querySelectorAll(".desc");
const POPUP4 = document.querySelector(".media");
const POPUP_CLOSE4 = document.querySelector(".close4");
const Video = document.querySelector("iframe");

TAB.forEach((desc) => {
  desc.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.innerText === "Informacje o lidze") {
      POPUP.classList.remove("hidden");
      POPUP2.classList.add("hidden");
      POPUP3.classList.add("hidden");
      POPUP4.classList.add("hidden");

      POPUP_CLOSE.addEventListener("click", () => {
        POPUP.classList.add("popup__fadeOut");
        setTimeout(() => {
          POPUP.classList.add("hidden");
          POPUP.classList.remove("popup__fadeOut");
        }, 300);
      });
    } else if (e.target.innerText === "Tabela") {
      POPUP2.classList.remove("hidden");
      POPUP.classList.add("hidden");
      POPUP3.classList.add("hidden");
      POPUP4.classList.add("hidden");

      POPUP_CLOSE2.addEventListener("click", () => {
        POPUP2.classList.add("popup__fadeOut2");
        setTimeout(() => {
          POPUP2.classList.add("hidden");
          POPUP2.classList.remove("popup__fadeOut2");
        }, 300);
      });
    } else if (e.target.innerText === "Drużyny") {
      POPUP3.classList.remove("hidden");
      POPUP.classList.add("hidden");
      POPUP2.classList.add("hidden");
      POPUP4.classList.add("hidden");

      POPUP_CLOSE3.addEventListener("click", () => {
        POPUP3.classList.add("popup__fadeOut3");
        setTimeout(() => {
          POPUP3.classList.add("hidden");
          POPUP3.classList.remove("popup__fadeOut3");
        }, 300);
      });
    } else {
      POPUP4.classList.remove("hidden");
      POPUP.classList.add("hidden");
      POPUP2.classList.add("hidden");
      POPUP3.classList.add("hidden");

      POPUP_CLOSE4.addEventListener("click", () => {
        stopVideo();
        POPUP4.classList.add("popup__fadeOut3");

        setTimeout(() => {
          POPUP4.classList.add("hidden");
          POPUP4.classList.remove("popup__fadeOut3");
        }, 300);
      });
    }
  });
});

Video.addEventListener("mouseover", (e) => {
  console.log(e.target.src);
});

function stopVideo() {
  let temp = Video.src;
  Video.src = temp;
}
