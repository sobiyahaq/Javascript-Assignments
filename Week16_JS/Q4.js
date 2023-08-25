function filterAndCapitalizeBooks(books) {
    const filteredBooks = books.filter(book => book.year > 2010);   
    const booksWithCapitalizedAuthors = filteredBooks.map(book => {
        return {
            title: book.title,
            author:book.author.toUpperCase(),
            year: book.year
        };
    });
    return booksWithCapitalizedAuthors;
}

const books = [
    { title: 'Book 1', author: 'Name A', year: 2004 },
    { title: 'Book 2', author: 'Name B', year: 2010 },
    { title: 'Book 3', author: 'Name C', year: 2015 },
    { title: 'Book 4', author: 'Name D', year: 2016 },
    { title: 'Book 5', author: 'Name E', year: 2012 },
    { title: 'Book 6', author: 'Name F', year: 2005 },];

console.log(filterAndCapitalizeBooks(books));
