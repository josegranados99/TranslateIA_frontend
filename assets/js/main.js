const textBox = document.getElementById("input-text");
const workArea = document.getElementById("spn-body");
const buttonSend = document.getElementById("img-send");
const subtitle = document.getElementById("spn-subtitle");
const languageSelect = document.getElementById("cmb-language");

const translateContainer = document.querySelector(".translator-container");
const userCode = crypto.randomUUID();

subtitle.innerHTML = currentHour();

buttonSend.addEventListener("click", sendData);

textBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendData();
  }
});
