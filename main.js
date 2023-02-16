function handleUpdate() {
  let blur = document.querySelector("#blur").value;
  let space = document.querySelector("#spacing").value;
  let color = document.querySelector("#base").value;
  document.querySelector(
    "#values"
  ).innerHTML = `blur= ${blur}, space= ${space} color= ${color}`;
}
const imgHandler = () => {
  let blur = document.querySelector("#blur").value;
  let space = document.querySelector("#spacing").value;
  let color = document.querySelector("#base").value;
  myImage.style.backgroundColor = `${color}`;
  myImage.style.filter = `blur(${blur}px)`;
  myImage.style.padding = `${space}px`;
  JS.style.color = `${color}`;
  val.style.color = `${color}`;
};

const blurElement = document.querySelector("#blur");
const spaceElement = document.querySelector("#spacing");
const colorElement = document.querySelector("#base");
const myImage = document.querySelector("#image");
const JS = document.querySelector(".hl");
const val = document.querySelector("#val");

window.addEventListener("load", () => {
  imgHandler();
  handleUpdate();
});

blurElement.addEventListener("input", () => {
  handleUpdate();
  imgHandler();
});

spaceElement.addEventListener("input", () => {
  handleUpdate();
  imgHandler();
});

colorElement.addEventListener("input", () => {
  handleUpdate();
  imgHandler();
});
