const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchUserProfile = async (userId) => {
  const response = await fetch(`${BASE_URL}/user/${userId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
