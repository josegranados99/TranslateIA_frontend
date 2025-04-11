const currentDate = () => {
  const params = {
    day: "numeric",
    month: "long",
    hour12: "true",
    hour: "numeric",
    minute: "numeric",
  };

  const data = new Intl.DateTimeFormat("default", params).format(new Date());
  return data;
};

const currentHour = () => {
  const params = {
    hour12: "true",
    hour: "numeric",
    minute: "numeric",
  };

  const data = new Intl.DateTimeFormat("default", params).format(new Date());
  return data;
};