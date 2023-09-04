
const apiUrl = "https://jsonplaceholder.typicode.com/posts/123456789";

fetch(apiUrl).then((response) => {
    if (!response.ok) {
        throw new Error("Failed to fetch the data");
    }
    // Parse the JSON data from the response
return response.json();
})
.then((data) => {
    console.log("DATA:",data);
})
.catch((error) => {
    result = error.message;
    console.log("ERROR::",result);
});
