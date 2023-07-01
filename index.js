"use-strict";

const btn_submit = document.querySelector(".submit");
const rating_comp = document.getElementById("rating-state");
const thankyou_comp = document.getElementById("thank-you-state");
const circles = document.querySelectorAll(".li-item");
const span = document.querySelector("span");
const svg = document.querySelector("svg");
const labels = document.querySelectorAll("label");
const errorMsg = document.getElementById("error-msg");

let n;

// event listener for rating
circles.forEach((element) => {
  element.addEventListener("click", (e) => {
    n = e.currentTarget.innerText;

    let el = circles[0];
    while (el) {
      if (el.tagName === "LI") {
        el.classList.remove("focus");
      }
      el = el.nextSibling;
    }

    e.target.classList.add("focus");

    return n;
  });
});

// event on submit button
btn_submit.addEventListener("click", () => {
  //adding and removing class to show "thank you" state
  rating_comp.classList.add("visible");

  if (n === undefined || n === "") {
    errorMsg.classList.remove("visible");
  } else {
    thankyou_comp.classList.remove("visible");
    span.innerHTML = `${n}`;
  }
});

svg.closest(".circle").addEventListener("click", function () {
  rating_comp.classList.remove("visible");
  errorMsg.classList.add("visible");
});
