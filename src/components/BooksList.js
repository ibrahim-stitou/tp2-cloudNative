
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/books/all');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>{book.title} by {book.author} ({book.year})</li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
