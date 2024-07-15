export const sortEvents = (events) => {
  return events.sort((a, b) => {
    const timeA = new Date(a.start).getTime();
    const timeB = new Date(b.start).getTime();
    if (timeA === timeB) {
      return a.title.localeCompare(b.title);
    }
    return timeA - timeB;
  });
};

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatTime = (dateStr) => {
  const date = new Date(dateStr);
  let hour = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  let ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12; 
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hour}:${minutes} ${ampm}`;
};
