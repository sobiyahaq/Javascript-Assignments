// Sample list of book objects
const books = [
  { title: 'Book 2', author: 'Mr Ben',  year: 2011 },
  { title: 'Book 1', author: 'Mr Aden', year: 2022 },
  { title: 'Book 3', author: 'Mr Cook', year: 2013 }
];

// Callback function to log titles in alphabetical order
function logTitlesInAlphabeticalOrder(titles) {
  titles.sort(); // Sort the titles alphabetically
  titles.forEach(title => {
    console.log(title);
  });
}

// Function to extract titles and call the callback function
function extractTitlesAndLog(books, callback) {
  const titles = books.map(book => book.title);
  callback(titles);
}

// Call the function with the list of books and the callback
extractTitlesAndLog(books, logTitlesInAlphabeticalOrder);
