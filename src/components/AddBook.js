
import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    publisher: '',
    category: '',
    year: '',
  });

  const handleInputChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleAddBook = async () => {
    try {
      await axios.post('http://localhost:3000/books/add', bookData);
      // Reset the form or perform other actions after adding
      setBookData({
        title: '',
        author: '',
        publisher: '',
        category: '',
        year: '',
      });
      console.log('Book added successfully');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form>
        <label>
          Title:
          <input type="text" name="title" value={bookData.title} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Author:
          <input type="text" name="author" value={bookData.author} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Publisher:
          <input type="text" name="publisher" value={bookData.publisher} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" name="category" value={bookData.category} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Year:
          <input type="text" name="year" value={bookData.year} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;

