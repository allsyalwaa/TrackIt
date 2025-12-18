const BASE_URL = import.meta.env.VITE_API_URL;

export async function getAlarm() {
  try {
    const response = await fetch(BASE_URL + "/alarms");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const postAlarm = async (alarm) => {
  const response = await fetch(`${BASE_URL}/alarms`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(alarm),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const deleteAlarm = async (alarmId) => {
  const response = await fetch(`${BASE_URL}/alarms/${alarmId}`, {
    method: "DELETE",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
