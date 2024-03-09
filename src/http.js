const fetchData = async () => {
  let url = "https://choco04-e8edd-default-rtdb.firebaseio.com/judy.json";

  const response = await fetch(url);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Fetch data failed!");
  }

  return data;
};

export default fetchData;

export const fetchEditData = async () => {
  const response = await fetch(
    "https://choco04-e8edd-default-rtdb.firebaseio.com/judy/isEdit.json"
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Fetch data failed!");
  }

  return data;
};

export const EditProduct = async (productKey) => {
  const currentData = await fetch(
    `https://choco04-e8edd-default-rtdb.firebaseio.com/judy/${productKey}.json`
  );

  if (!currentData.ok) {
    throw new Error("Failed to edit current data");
  }

  const currentProduct = await currentData.json();

  let initialQuantity;

  if (!currentProduct.quantity || currentProduct.quantity === 0) {
    initialQuantity = { quantity: 1 };
  }

  const response = await fetch(
    `https://choco04-e8edd-default-rtdb.firebaseio.com/judy/${productKey}.json`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isInCart: true, ...initialQuantity }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add isInCart property");
  }

  return response.json();
};

export const addToCart = async (productKey) => {
  const currentData = await fetch(
    `https://choco04-e8edd-default-rtdb.firebaseio.com/judy/${productKey}.json`
  );

  if (!currentData.ok) {
    throw new Error("Failed to fetch current data");
  }

  const currentProduct = await currentData.json();

  let initialQuantity;

  if (!currentProduct.quantity || currentProduct.quantity === 0) {
    initialQuantity = { quantity: 1 };
  }

  const response = await fetch(
    `https://choco04-e8edd-default-rtdb.firebaseio.com/judy/${productKey}.json`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isInCart: true, ...initialQuantity }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add isInCart property");
  }

  return response.json();
};

export const plusOne = async (productKey) => {
  const currentData = await fetch(
    `https://choco04-e8edd-default-rtdb.firebaseio.com/judy/${productKey}.json`
  );

  if (!currentData.ok) {
    throw new Error("Failed to fetch current data");
  }

  const currentProduct = await currentData.json();

  const plusOne = currentProduct.quantity + 1;

  const response = await fetch(
    `https://choco04-e8edd-default-rtdb.firebaseio.com/judy/${productKey}.json`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: plusOne }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to plus one");
  }

  return response.json();
};

export const minusOne = async (productKey) => {
  const currentData = await fetch(
    `https://choco04-e8edd-default-rtdb.firebaseio.com/judy/${productKey}.json`
  );

  if (!currentData.ok) {
    throw new Error("Failed to fetch current data");
  }

  const currentProduct = await currentData.json();

  const minusOne = currentProduct.quantity - 1;

  const response = await fetch(
    `https://choco04-e8edd-default-rtdb.firebaseio.com/judy/${productKey}.json`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: minusOne }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to minus one");
  }

  return response.json();
};

export const removeCartItem = async (productKey) => {
  const response = await fetch(
    `https://choco04-e8edd-default-rtdb.firebaseio.com/judy/${productKey}.json`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isInCart: false, quantity: 0 }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to remove cart item.");
  }

  return response.json();
};

export const toEditProduct = async (productData) => {
  const response = await fetch(
    `https://choco04-e8edd-default-rtdb.firebaseio.com/judy/isEdit.json`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productData }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to change current edit data.");
  }

  return response.json();
};

export const deleteProduct = async (productKey) => {
  const response = await fetch(
    `https://choco04-e8edd-default-rtdb.firebaseio.com/judy/${productKey}.json`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete data.");
  }

  return response.json();
};

export const uploadContactData = async (data) => {
  const response = await fetch(
    `https://choco04-e8edd-default-rtdb.firebaseio.com/contact.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to upload data.");
  }

  return response.json();
};
