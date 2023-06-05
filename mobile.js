//  const mobile = document.querySelectorAll(".modal");

// // mobile.forEach((el) => {
// //   console.log(el);
// // });

const mobile = document.querySelectorAll(".modal");
const html = [];
mobile.forEach((el) => {
  let pclass;
  let reg;
  if (
    el.querySelector(".reg--status").firstElementChild.textContent ===
    "REGISTRATION OPEN"
  ) {
    pclass = "open";
    reg = "REG.OPEN";
  } else if (
    el.querySelector(".reg--status").firstElementChild.textContent ===
    "REGISTRATION CLOSED"
  ) {
    pclass = "closed";
    reg = "REG.CLOSED";
  } else if (
    el.querySelector(".reg--status").firstElementChild.textContent ===
    "COMPLETED"
  ) {
    pclass = "completed";
    reg = "COMPLETED";
  } else {
    pclass = "live";
    reg = "LIVE";
  }
  console.log(el.querySelector(".reg--status").firstElementChild.textContent);
  let html1 = `<div class="modal--mobile">
    <div class="banner--mobile"><img src="${
      el.firstElementChild.firstElementChild.dataset.src
    }"/></div>
    <div class="container-mobile">
      <div class="tourney-details--mobile">
        <h2 class="heading-secondary--mobile">${
          el.lastElementChild.firstElementChild.textContent
        }</h2>
        <div class="mode--slots">
          <div class="mode--mobile">
            <h3>Mode:</h3>
            <span>${
              el.lastElementChild.querySelector(".mode--slots")
                .firstElementChild.lastElementChild.textContent
            }</span>
          </div>
          <div class="dot-cont"></div>
          <div class="slot--mobile">
            <h3>Slots:</h3>
            <span>${
              el.lastElementChild.querySelector(".mode--slots").lastElementChild
                .lastElementChild.textContent
            }</span>
          </div>
        </div>
        <div class="date--mobile">
          <h3>Date:</h3>
          <p>${
            el.lastElementChild.querySelector(".details").lastElementChild
              .lastElementChild.textContent
          }</p>
        </div>
        <div class="prize--mobile">
          <h3>Prize Pool:</h3>
          <p class="heading-secondary">${
            el.lastElementChild.querySelector(".details").firstElementChild
              .lastElementChild.textContent
          }</p>
        </div>
      </div>

      <div class="reg--status--mobile reg--status ${pclass}">${reg}</div>
      <a href="${
        el.lastElementChild.lastElementChild.lastElementChild.href
      }" class="${
    el.lastElementChild.lastElementChild.lastElementChild.classList.value
  }">${el.lastElementChild.lastElementChild.lastElementChild.textContent}</a>

    </div>
    </div>
    <div class="divider--mobile"></div>`;
  html.push(html1);
});
const finalHtml = `<div class="tourney-blocks grid grid-column--1">
${html.join(" ")}
</div>`;

if (x.matches) {
  divider.forEach((el) => (el.style.display = "none"));
  // modal.forEach((el) => el.classList.remove("grid"));
  tourney.classList.remove("grid-column--7");
  tourney.classList.add("grid-column--1");
  modal.forEach((el) => (el.style.display = "none"));
  tourney.style.display = "none";

  tourneySection.insertAdjacentHTML("beforeend", finalHtml);
  document
    .querySelectorAll(".slider-img")
    .forEach((el) => (el.src = "./mobile-banner.png"));
  // document
  //   .querySelectorAll(".slider__btn")
  //   .forEach((el) => (el.style.display = "none"));
}

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

// console.log(mobile);
// console.log(mobile.lastElementChild.firstElementChild.textContent);
// console.log(
//   mobile.querySelector(".live-container").firstElementChild.firstElementChild
//     .textContent
// );

// console.log(
//   mobile.lastElementChild.querySelector(".mode--slots").firstElementChild
//     .lastElementChild.textContent
// );
// console.log(
//   mobile.lastElementChild.querySelector(".mode--slots").lastElementChild
//     .lastElementChild.textContent
// );
// console.log(
//   mobile.lastElementChild.querySelector(".details").firstElementChild
//     .lastElementChild.textContent
// );
// console.log(
//   mobile.lastElementChild.querySelector(".details").lastElementChild
//     .lastElementChild.textContent
// );
