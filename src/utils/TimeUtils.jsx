/* eslint-disable no-unused-vars */
export const convertToAmPm = (time) => {
  const [hour, minute] = time.split(":");
  let hourInt = parseInt(hour);
  const ampm = hourInt >= 12 ? "PM" : "AM";
  hourInt = hourInt % 12 || 12;
  return `${hourInt}:${minute} ${ampm}`;
};

export const extractTime = (dateTimeString) => {
  const [date, time] = dateTimeString.split("T");
  const formattedTime = time.split(":00Z")[0];
  return convertToAmPm(formattedTime);
};

export const handleHoursInput = (event, setHour) => {
  let value = event.target.value;
  value = value.replace(/[^0-9]/g, ""); // Hanya angka
  if (value !== "" && (parseInt(value) < 1 || parseInt(value) > 12)) {
    value = value.slice(0, -1); // Hapus karakter terakhir jika tidak valid
  }
  setHour(value);
};

export const handleMinutesInput = (event, setMinute) => {
  let value = event.target.value;
  value = value.replace(/[^0-9]/g, ""); // Hanya angka
  if (value.length > 2) {
    value = value.slice(0, 2); // Batasi panjang input maksimal 2 karakter
  }
  if (value !== "" && parseInt(value) > 59) {
    value = value.slice(0, -1); // Hapus karakter terakhir jika tidak valid
  }
  setMinute(value);
};
