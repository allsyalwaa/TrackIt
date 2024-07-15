export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const handleHoursInput = (event) => {
  let value = event.target.value;
  value = value.replace(/[^0-9]/g, "");
  if (value !== "" && (parseInt(value) < 1 || parseInt(value) > 12)) {
    value = value.slice(0, -1);
  }
  event.target.value = value;
};

export const handleMinutesInput = (event) => {
  let value = event.target.value;
  value = value.replace(/[^0-9]/g, ""); 
  if (value.length > 2) {
    value = value.slice(0, 2); 
  }
  if (value !== "" && parseInt(value) > 59) {
    value = value.slice(0, -1); 
  }
  event.target.value = value;
};
