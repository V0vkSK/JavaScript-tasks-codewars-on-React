import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function BookDetails() {
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState([]);

    // useEffect(() => {
    axios
        .get('http://localhost:4040/books/')
        .then(({ data }) => setBooks(data));

    const dsaa = setBook(books.find(id => id.id === 1));
    console.log(dsaa);
    // }, []);

    return (
        <>
            <h1>The Page of one of books </h1>
            <img src={book.imgUrl} alt="Book" width={500}></img>
            <h2>{book.title}</h2>
            <p>{book.descr}</p>
        </>
    );
}
export default BookDetails;
