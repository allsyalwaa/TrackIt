const BASE_URL = import.meta.env.VITE_API_URL;

export async function getFinance() {
  try {
    const response = await fetch(BASE_URL + `/money-calculator/finance`);
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
    const response = await fetch(BASE_URL + `/money-calculator/balance`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const addBalance = async (data) => {
  const response = await fetch(`${BASE_URL}/money-calculator/balance`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};

export const fetchBalanceData = async (balanceId) => {
  const response = await fetch(
    `${BASE_URL}/money-calculator/balance/${balanceId}`,
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const updateBalanceData = async (balanceId, balanceData) => {
  const response = await fetch(
    `${BASE_URL}/money-calculator/balance/${balanceId}`,
    {
      method: balanceId ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(balanceData),
    },
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return response.json();
};

export async function getTransaction() {
  try {
    const response = await fetch(BASE_URL + `/money-calculator/transaction`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const postTransaction = async (data) => {
  const response = await fetch(`${BASE_URL}/money-calculator/transaction`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  alert("Transaction added successfully");
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};

export const deleteTransaction = async (transactionId) => {
  const response = await fetch(
    `${BASE_URL}/money-calculator/transaction/${transactionId}`,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to delete the transaction");
  }

  return response.json();
};

export const fetchTransactionData = async (transactionId) => {
  const response = await fetch(
    `${BASE_URL}/money-calculator/transaction/${transactionId}`,
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const updateTransactionData = async (transactionId, transactionData) => {
  const response = await fetch(
    `${BASE_URL}/money-calculator/transaction/${transactionId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    },
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return response.json();
};
