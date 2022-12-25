const sendMsgAPI = "https://api.callmebot.com/text.php?user=@oolezha&text=";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => sendMsg(e));

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
