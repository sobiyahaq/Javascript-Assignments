// Define the API endpoint URL
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Use the fetch method to retrieve data from the API
fetch(apiUrl).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    // Parse the JSON data from the response
    return response.json();
  })
  .then((data) => {
    // Log the data to the console
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors that occur during the fetch
    console.error("Error:", error);
  });
