const dotContainer = document.querySelector(".dots");
const x = window.matchMedia("(max-width:27em)");
const tourney = document.querySelector(".tourney-blocks");
const divider = document.querySelectorAll(".divider");
const modal = document.querySelectorAll(".modal");
const tourneySection = document.querySelector(".tournaments-section");
let curSlide = 0;

// slider example
var slider2 = document.getElementById("slider"),
  sliderItems = document.getElementById("slides"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next");

let leftist = 190;

setInterval(() => {
  next.click();
}, 8000);

const slider = document.querySelector(".slider");

// const init = parseInt(getComputedStyle(slider).width) * 0.1;

function slide(wrapper, items, prev, next) {
  var posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    slides = items.getElementsByClassName("slide"),
    slidesLength = slides.length,
    slideSize = items.getElementsByClassName("slide")[0].offsetWidth,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true),
    index = 0,
    allowShift = true;
  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add("loaded");

  // Mouse events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener("touchstart", dragStart);
  items.addEventListener("touchend", dragEnd);
  items.addEventListener("touchmove", dragAction);

  // Click events
  prev.addEventListener("click", function () {
    shiftSlide(-1);
  });
  next.addEventListener("click", function () {
    shiftSlide(1);
  });

  // Transition events
  items.addEventListener("transitionend", checkIndex);

  function dragStart(e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;

    if (e.type == "touchstart") {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction(e) {
    e = e || window.event;

    if (e.type == "touchmove") {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = items.offsetLeft - posX2 + "px";
  }

  function dragEnd(e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, "drag");
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, "drag");
    } else {
      items.style.left = posInitial + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

  function shiftSlide(dir, action) {
    const maxSlide = slides.length - 3;
    items.classList.add("shifting");

    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft;
      }
      if (dir == 1) {
        items.style.left = posInitial - slideSize + "px";
        if (curSlide === maxSlide) {
          curSlide = 0;
        } else {
          curSlide++;
        }
        activateDot(curSlide);
        index++;
      } else if (dir == -1) {
        items.style.left = posInitial + slideSize + "px";
        if (curSlide === 0) {
          curSlide = 2;
        } else {
          curSlide--;
        }
        activateDot(curSlide);
        index--;
      }
    }

    allowShift = false;
  }

  function checkIndex() {
    items.classList.remove("shifting");

    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }

    if (index == slidesLength) {
      items.style.left = -(1 * slideSize) + "px";
      index = 0;
    }

    allowShift = true;
  }
}

slide(slider2, sliderItems, prev, next);

const createDots = function () {
  document.querySelectorAll(".slide").forEach((_, i) => {
    if (i < 3) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    }
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

createDots();
activateDot(0);

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  // console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// const modalGrid = document.querySelector(".modal-redirect");

// modalGrid.addEventListener("click", function (e) {
//   window.open("https://gameduels.com/gdesports/gd-form%20copy/form.html");
// });
