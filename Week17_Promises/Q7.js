async function fetchDataFromAPIs() {
    try {
      // Fetch data from the first API
      const todoResponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  
      // Check if the response is successful
      if (!todoResponse.ok) {
        throw new Error("Failed to fetch data from the first API");
      }
  
      // Parse the JSON data from the first API response
      const todoData = await todoResponse.json();
  
      // Fetch data from the second API
      const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  
      // Check if the response from the second API is successful
      if (!postResponse.ok) {
        throw new Error("Failed to fetch data from the second API");
      }
  
      // Parse the JSON data from the second API response
      const postData = await postResponse.json();
  
      // Combine the results into an object
      const combinedData = {
        todo: todoData,
        post: postData,
      };
  
      // Log the combined data
      console.log(combinedData);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Call the function to fetch and combine the data
  fetchDataFromAPIs();
  