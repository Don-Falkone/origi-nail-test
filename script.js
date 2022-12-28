const sendMsgAPI = "https://api.callmebot.com/text.php?user=@oolezha&text=";
const sliderImages = [
  "./assets/images/alena_khromova_1661228674447711.jpg",
  "./assets/images/IMG_4737.jpg",
  "./assets/images/IMG_5154-2.JPG",
];

const active = "white";
const inactive = "#f5f5f5a5";

const form = document.querySelector("form");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

let currentID = 0;

form.addEventListener("submit", (e) => sendMsg(e));
rightBtn.addEventListener("click", () => changePhoto(1));
leftBtn.addEventListener("click", () => changePhoto(-1));

function openPrice(name) {
  const popUp = document.querySelector(".pop-up");
  document.getElementById("tableName").textContent = name;
  popUp.classList.remove("hidden");
}

function closePrice() {
  const popUp = document.querySelector(".pop-up");
  popUp.classList.add("hidden");
}

function openBook() {
  const popUp = document.querySelector(".book");
  popUp.classList.remove("hidden");
}

function closeBook() {
  const popUp = document.querySelector(".book");
  popUp.classList.add("hidden");
}

function sendMsg(event) {
  event.preventDefault();
  const name = document.getElementById("nameUser")?.value;
  const tel = document.getElementById("telUser")?.value;
  const url = new URL(sendMsgAPI + "Имя: " + name + " Телефон: " + tel);
  fetch(url).catch((e) => {
    console.log("Error: " + e);
  });
  closeBook();
}

function changePhoto(step) {
  const slider = document.querySelector("#slider-image");
  currentID = (3 + (currentID + step)) % 3;
  console.log(currentID);
  switch (currentID) {
    case 0:
      document.documentElement.style.setProperty("--before-color", active);
      document.documentElement.style.setProperty("--main-color", inactive);
      document.documentElement.style.setProperty("--after-color", inactive);
      break;
    case 1:
      document.documentElement.style.setProperty("--before-color", inactive);
      document.documentElement.style.setProperty("--main-color", active);
      document.documentElement.style.setProperty("--after-color", inactive);
      break;
    case 2:
      document.documentElement.style.setProperty("--before-color", inactive);
      document.documentElement.style.setProperty("--main-color", inactive);
      document.documentElement.style.setProperty("--after-color", active);
      break;
  }
  slider.src = sliderImages[currentID];
}
