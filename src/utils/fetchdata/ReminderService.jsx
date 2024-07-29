const BASE_URL = import.meta.env.VITE_API_URL;

export async function getReminders() {
  try {
    const response = await fetch(BASE_URL + "/reminder");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const postReminder = async (reminderData) => {
  const response = await fetch(`${BASE_URL}/reminder`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reminderData),
  });
  alert("Reminder added successfully");
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};

export const handleDeleteReminder = async (id) => {
  const response = await fetch(`${BASE_URL}/reminder/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete the reminder");
  }

  return response.json();
};

export const fetchReminderDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/reminder/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch the reminder");
  }
  return response.json();
};

export const fetchReminderData = async (reminderId) => {
  const response = await fetch(`${BASE_URL}/reminder/${reminderId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const updateReminderData = async (reminderId, reminderData) => {
  const response = await fetch(`${BASE_URL}/reminder/${reminderId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reminderData),
  });
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return response.json();
};
