fetch("https://wallhaven.cc/api/v1/search")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error loading API");
    }
    return response.json(); // Return parsed JSON data
  })
  .then((data) => {
    console.log(data); // Log the data here
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors
  });
