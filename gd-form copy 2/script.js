let timer;

const compareDate = new Date();
var countDownDate = new Date("JUL 15, 2023 16:37:52").getTime();

compareDate.setDate(compareDate.getDate() + 11); //just for this demo today + 7 days

var myfunc = setInterval(function () {
	// code goes here
	var now = new Date().getTime();
	var timeleft = countDownDate - now;

	var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
	var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

	document.querySelector(".day").textContent = String(days).padStart(2, 0);
	document.querySelector(".hour").textContent = String(hours).padStart(2, 0);
	document.querySelector(".minute").textContent = String(minutes).padStart(
		2,
		0
	);
	document.querySelector(".second").textContent = String(seconds).padStart(
		2,
		0
	);
}, 1000);

// function timeBetweenDates(toDate) {
//   const dateEntered = toDate;
//   const now = new Date();
//   const difference = dateEntered.getTime() - now.getTime();
//   if (difference != 0) {
//     let seconds = Math.floor(difference / 1000);
//     let minutes = Math.floor(seconds / 60);
//     let hours = Math.floor(minutes / 60);
//     let days = Math.floor(hours / 24);

//     hours %= 24;
//     minutes %= 60;
//     seconds %= 60;
//   }
//   return;
// }

let formHtml = [];

console.log(formHtml);

function confirm(e) {
	e.preventDefault();
	const edit = document.querySelectorAll(".edit");
	edit.forEach((el) => {
		el.style.display = "flex";
		el.addEventListener("click", function (e) {
			e.preventDefault();
			el.closest(".form")
				.querySelectorAll("input")
				.forEach((el) => {
					el.readOnly = !el.readOnly;
					el.classList.toggle("hidden");
				});
		});
	});
	document.querySelector(".form-btn-confirm").style.display = "none";
	document.querySelector(".form-btn").style.display = "flex";
	document.querySelectorAll(".form").forEach((el) => {
		el.querySelectorAll("input").forEach((el) => {
			el.readOnly = "true";
			el.classList.add("hidden");
		});
	});

	const handleSubmit = (event) => {
		event.preventDefault();

		const myForm = event.target;
		const formData = new FormData(myForm);

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString(),
		})
			.then(() => (document.location.href = "../confirm/register.html"))
			.catch((error) => alert(error));
	};
	document.querySelector(".form-box").addEventListener("submit", handleSubmit);
}
document.querySelector(".form-box").addEventListener("submit", confirm);

// const handleSubmit = (event) => {
//   event.preventDefault();

//   const myForm = event.target;
//   const formData = new FormData(myForm);

//   fetch("/", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams(formData).toString(),
//   })
//     .then(() => console.log("Form successfully submitted"))
//     .catch((error) => alert(error));
// };

// document.querySelector("form").addEventListener("submit", handleSubmit);

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
