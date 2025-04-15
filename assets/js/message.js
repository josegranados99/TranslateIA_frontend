const messageSubtitle = (subtitle, text, ms) => {
  setTimeout(() => {
    subtitle.innerHTML = text;
  }, ms);
};

const addMessage = (elementHtml, message, img = "") => {
  if (!img) {
    elementHtml.innerHTML = `${message}<span class='metadata'><span class='hour'>${currentHour()}</span></span>`;
  } else {
    elementHtml.innerHTML = `${message}<span class='metadata'><span class='hour'>${currentHour()}<span class='seen'>${img}</span></span>`;
  }
  workArea.append(elementHtml);
};

