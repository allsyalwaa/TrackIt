const BASE_URL = import.meta.env.VITE_API_URL;

export async function getNotes() {
  try {
    const response = await fetch(BASE_URL + "/notes");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const postNote = async (noteData) => {
  const response = await fetch(`${BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteData),
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};

export const handleDeleteNote = async (id) => {
  const response = await fetch(`${BASE_URL}/notes/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete the note");
  }

  console.log("Note deleted successfully");
  return response.json();
};

export const fetchNoteDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/notes/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch the notes");
  }
  return response.json();
};

export const fetchNoteData = async (noteId) => {
  const response = await fetch(`${BASE_URL}/notes/${noteId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const updateNoteData = async (noteId, noteData) => {
  const response = await fetch(`${BASE_URL}/notes/${noteId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteData),
  });
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return response.json();
};
