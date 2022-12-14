const ratingNumber = document.querySelectorAll(".number");
const submit = document.querySelector(".submit");
const sectionDisplay = document.querySelectorAll("section");
const yourRating = document.querySelector(".selected");
const thanks = document.querySelector(".thanks");
const main = document.querySelector(".main");

ratingNumber.forEach((ele, i) =>
  ele.addEventListener("click", function () {
    let active = document.querySelector(".active");
    active ? active.classList.remove("active") : "";
    ele.classList.add("active");
    yourRating.innerHTML = `You select ${i + 1} out of 5`;
  })
);

submit.addEventListener("click", function () {
  thanks.classList.remove("hidden");
  main.classList.add("hidden");
});
