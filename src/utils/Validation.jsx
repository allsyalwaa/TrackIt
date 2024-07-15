export const validation = (formData) => {
  const errors = {};
  const minuteError = checkMinutes(formData.minutes);
  const nameError = checkAlarmName(formData["alarm-name"]);
  if (minuteError) {
    errors.minutes = minuteError;
  }
  if (nameError) {
    errors["alarm-name"] = nameError;
  }
  return errors;
};

const checkMinutes = (minutes) => {
  if (minutes.length !== 2 || isNaN(minutes) || minutes < 0 || minutes > 59) {
    return "Minutes must be a 2-digit number between 00 and 59.";
  }
  return false;
};

const checkAlarmName = (name) => {
  if (name.trim() === "") {
    return "Alarm name cannot be empty.";
  }
  if (name.length < 3 || name.length > 20) {
    return "Alarm name must be between 3 and 20 characters.";
  }
  return false;
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};
