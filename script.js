const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector(".choose-btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let randomColor = Math.trunc(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[Math.trunc(randomColor)];
  color.textContent = colors[Math.trunc(randomColor)];
  color.style.color = colors[randomColor];
});
