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
export async function getEvents(date) {
  try {
    const response = await fetch(
      `https://track-it-rest-api.vercel.app/api/calendar${date ? `?date=${date}` : ""}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getFinance() {
  try {
    const response = await fetch(
      `https://track-it-rest-api.vercel.app/api/money-calculator/finance`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      income: 0,
      expenditure: 0,
    };
  }
}

export async function getBalance() {
  try {
    const response = await fetch(
      `https://track-it-rest-api.vercel.app/api/money-calculator/balance`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getTransaction() {
  try {
    const response = await fetch(
      `https://track-it-rest-api.vercel.app/api/money-calculator/transaction`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
