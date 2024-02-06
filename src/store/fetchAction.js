export const sendData = (data) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://choco04-e8edd-default-rtdb.firebaseio.com/judy.json",
        {
          method: "PUT",
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Send data failed!");
      }
    };

    try {
      await sendRequest();

      console.log("Send data successfully!");
    } catch (error) {
      console.error(error.message);
    }
  };
};

// export const fetchData = () => {
//   return async (dispatch) => {
//     const fetchRequest = async () => {
//       const response = await fetch(
//         "https://choco04-e8edd-default-rtdb.firebaseio.com/judy.json"
//       );

//       if (!response.ok) {
//         throw new Error("Fetch data failed!");
//       }

//       const data = await response.json();

//       return data;
//     };

//     try {
//       const diaryData = await fetchRequest();
//       dispatch(diaryActions.replaceData(diaryData));

//       console.log("Fetch data successfully!");
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
// };
