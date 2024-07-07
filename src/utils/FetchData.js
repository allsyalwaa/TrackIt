export async function getNotes() {
  try {
    const response = await fetch(
      "https://track-it-rest-api.vercel.app/api/notes",
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function getTasks() {
  try {
    const response = await fetch(
      "https://track-it-rest-api.vercel.app/api/task",
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function getReminders() {
  try {
    const response = await fetch(
      "https://track-it-rest-api.vercel.app/api/reminder",
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function getAlarm() {
  try {
    const response = await fetch(
      "https://track-it-rest-api.vercel.app/api/alarm",
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function getEvents() {
  try {
    const response = await fetch(
      "https://track-it-rest-api.vercel.app/api/calendar",
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
