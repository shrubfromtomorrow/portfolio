window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const menuBtn = document.querySelector(".menubtn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
const dropDown = document.querySelector(".dropdown");
let dropDownOpen = false;
menuBtn.addEventListener("click", () => {
  if (!dropDownOpen) {
    dropDown.classList.add("open");
    dropDownOpen = true;
  } else {
    dropDown.classList.remove("open");
    dropDownOpen = false;
  }
});
const juniorLinkList = document.querySelector("#juniorLinkList");
const juniorCollapsible = document.querySelector(".juniorCollapsible");
const vertPlusjun = document.querySelector("#vertPlusjun");
let juniorLinkListOpen = false;
juniorLinkList.addEventListener("click", () => {
  if (!juniorLinkListOpen) {
    juniorLinkList.classList.add("open");
    juniorLinkListOpen = true;
    juniorCollapsible.style.display = "block";
    vertPlusjun.style.opacity = "0";
  } else {
    juniorLinkList.classList.remove("open");
    juniorLinkListOpen = false;
    juniorCollapsible.style.display = "none";
    vertPlusjun.style.opacity = "1";
  }
});
const seniorLinkList = document.querySelector("#seniorLinkList");
const seniorCollapsible = document.querySelector(".seniorCollapsible");
const vertPlussen = document.querySelector("#vertPlussen");
let seniorLinkListOpen = false;
seniorLinkList.addEventListener("click", () => {
  if (!seniorLinkListOpen) {
    seniorLinkList.classList.add("open");
    seniorLinkListOpen = true;
    seniorCollapsible.style.display = "block";
    vertPlussen.style.opacity = "0";
  } else {
    seniorLinkList.classList.remove("open");
    seniorLinkListOpen = false;
    seniorCollapsible.style.display = "none";
    vertPlussen.style.opacity = "1";
  }
});

const buttons = document.querySelectorAll("[data-carousel-button]");
const caption = document.querySelector("#caption");
const captionCaption = document.querySelector("#captionCaption");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offest = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offest;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    if (newIndex == 0) {
      captionCaption.textContent = "The general setup to the project and small bit of code.";
      caption.textContent = "The Setup";
    }
    else if (newIndex == 1) {
      captionCaption.textContent = "An explanation of the math involved for rotation.";
      caption.textContent = "Rotation";
    }
    else if (newIndex == 2) {
      captionCaption.textContent = "Turning the lights into a display.";
      caption.textContent = "Pixeling";
    }
    else {
      captionCaption.textContent = "Making an improvement to the data throughput on the lights.";
      caption.textContent = "Doubled Lines";
    }
  })
})

const carousel = document.querySelector(".carousel");

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}

document.addEventListener("scroll", function () {
  if (isInViewport(carousel)) {
    console.log("juan");
  }
  else {
    console.log("juan't");
  }
})


