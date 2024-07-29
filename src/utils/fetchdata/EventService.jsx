const BASE_URL = import.meta.env.VITE_API_URL;

export async function getEvents(date) {
  try {
    const response = await fetch(
      BASE_URL + `/calendar${date ? `?date=${date}` : ""}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const postEvent = async (event) => {
  const response = await fetch(`${BASE_URL}/calendar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
  alert("Event added successfully");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
