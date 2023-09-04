function fetchDataFromAPI() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error! Status: ${response.status}`);
        }
        return response.json(); // Parse the response body as JSON
      })
      .then(data => {
        console.log('Data from API:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Call the function to fetch and log the data
  fetchDataFromAPI();
  