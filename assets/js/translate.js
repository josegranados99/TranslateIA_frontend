const sendData = async () => {
  const textTranslate = textBox.value.trim();

  if (!textTranslate) {
    textBox.focus();
    return false;
  }

  messageSubtitle(subtitle, "Sending...", 100);

  const imgSend = "<img src='../assets/img/entregado.png' alt='img send'/>";
  const textSend = document.createElement("div");

  textSend.className = "text sent";
  textSend.innerHTML =
    textTranslate +
    "<span class='metadata'><span class='hour'>" +
    currentHour() +
    "</span><span class='seen'>" +
    imgSend +
    "" +
    "</span></span>";

  workArea.append(textSend);

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
    
    const textRecive = document.createElement("div");

    textRecive.className = "text received";
    textRecive.innerHTML =
      data.translation +
      "<span class='metadata'><span class='hour'>" +
      currentHour() +
      "</span></span>";

    workArea.append(textRecive);

    translateContainer.scrollTop = translateContainer.scrollHeight;

    messageSubtitle(subtitle, "Online", 3000);
  } catch (error) {
    console.log("Error" + error);
  }

  textBox.value = "";
  textBox.focus();
};
