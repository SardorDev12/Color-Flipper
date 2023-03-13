const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const btn = document.querySelector(".choose-btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.trunc(Math.random() * hex.length);
    randomColor += hex[randomNumber];
  }

  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});
