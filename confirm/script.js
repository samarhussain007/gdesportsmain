const tMinus = document.querySelector(".t-minus");
console.log(tMinus);

async function counter(s) {
  for (let i = s; i >= 0; i--) {
    await new Promise((r) => setTimeout(r, 1000));
    tMinus.textContent = i;
  }
  window.open(
    "    https://discord.com/invite/2n2TdSK9XN",
    "_blank" // <- This is what makes it open in a new window.
  );
}

counter(5);

// window.addEventListener("load", (event) => {
//   const myTimeout = setTimeout(myGreeting, 3000);

//   function myStopFunction() {
//     clearTimeout(myTimeout);
//     document.location.href = "https://gameduels.com/";
//     console.log(myTimeout);
//   }
//   document
//     .querySelector(".cnclredirect")
//     .addEventListener("click", myStopFunction);
// });
