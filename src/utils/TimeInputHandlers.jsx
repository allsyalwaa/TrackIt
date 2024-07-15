export const handleHoursInput = (event) => {
  let value = event.target.value;
  value = value.replace(/[^0-9]/g, ""); // Hanya angka
  if (value !== "" && (parseInt(value) < 1 || parseInt(value) > 12)) {
    value = value.slice(0, -1); // Hapus karakter terakhir jika tidak valid
  }
  event.target.value = value;
};

export const handleMinutesInput = (event) => {
  let value = event.target.value;
  value = value.replace(/[^0-9]/g, ""); // Hanya angka
  if (value.length > 2) {
    value = value.slice(0, 2); // Batasi panjang input maksimal 2 karakter
  }
  if (value !== "" && parseInt(value) > 59) {
    value = value.slice(0, -1); // Hapus karakter terakhir jika tidak valid
  }
  event.target.value = value;
};
