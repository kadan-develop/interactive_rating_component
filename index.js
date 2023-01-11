"use-strict";

const btn_submit = document.querySelector(".submit");
const rating_comp = document.getElementById("rating-state");
const thankyou_comp = document.getElementById("thank-you-state");
const circles = document.querySelectorAll(".circle");
const span = document.querySelector("span");

let n;

// event listener for rating
circles.forEach((element) => {
  element.addEventListener("click", (e) => {
    n = e.currentTarget.innerText;
    return n
  });
});

// event on submit button
btn_submit.addEventListener("click", () => {

  //adding and removing class to show "thank you" state
  rating_comp.classList.add("visible");
  thankyou_comp.classList.remove("visible");
  span.innerHTML = `${n}`;
});
