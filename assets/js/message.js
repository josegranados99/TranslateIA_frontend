const messageSubtitle = (subtitle, text, ms) => {
  setTimeout(() => {
    subtitle.innerHTML = text;
  }, ms);
};
