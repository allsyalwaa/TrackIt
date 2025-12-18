const BASE_URL = import.meta.env.VITE_API_URL;

export async function getTasks() {
  try {
    const response = await fetch(BASE_URL + "/tasks");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const postTask = async (taskData) => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
  alert("Task added successfully");
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};

export const handleDeleteTask = async (id) => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete the task");
  }

  return response.json();
};

export const updateTaskStatus = async (id, completed) => {
  const response = await fetch(`${BASE_URL}/tasks/${id}/status`, {
    method: "PATCH",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });

  if (!response.ok) {
    throw new Error("Failed to update the task status");
  }

  return response.json();
};

export const fetchTaskDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch the task");
  }
  return response.json();
};

export const fetchTaskData = async (taskId) => {
  const response = await fetch(`${BASE_URL}/tasks/${taskId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const updateTaskData = async (taskId, taskData) => {
  const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return response.json();
};
