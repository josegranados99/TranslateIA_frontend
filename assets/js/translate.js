const sendData = async () => {
  const textTranslate = textBox.value.trim();

  if (!textTranslate) {
    textBox.focus();
    return false;
  }

  messageSubtitle(subtitle, "Sending...", 100);

  const imgSend = "<img src='../assets/img/entregado.png' alt='img send'/>";
  const textSend = document.createElement("div");
  const textRecive = document.createElement("div");

  textSend.className = "text sent";
  textRecive.className = "text received";

  addMessage(textSend, textTranslate, imgSend);

  try {
    const response = await fetch("http://localhost:3123/api/v1/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userCode,
        language: languageSelect.value,
        text: textTranslate,
      }),
    });

    subtitle.innerHTML = "Translating...";

    const data = await response.json();
    console.log(data);

    addMessage(textRecive, data.translation);
    translateContainer.scrollTop = translateContainer.scrollHeight;

    messageSubtitle(subtitle, "Online", 3000);
  } catch (error) {
    console.log("Error" + error);

    addMessage(textRecive, "Error in translation, please try again.");
    translateContainer.scrollTop = translateContainer.scrollHeight;

    messageSubtitle(subtitle, "Online", 3000);
  }

  textBox.value = "";
  textBox.focus();
};
