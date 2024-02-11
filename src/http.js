const fetchData = async () => {
  const response = await fetch(
    "https://choco04-e8edd-default-rtdb.firebaseio.com/judy.json"
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Fetch data failed!");
  }

  return data;
};

export default fetchData;
