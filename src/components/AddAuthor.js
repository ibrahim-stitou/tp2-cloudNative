
import React, { useState } from 'react';
import axios from 'axios';

const AddAuthor = () => {
  const [authorData, setAuthorData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleInputChange = (e) => {
    setAuthorData({ ...authorData, [e.target.name]: e.target.value });
  };

  const handleAddAuthor = async () => {
    try {
      await axios.post('http://localhost:3000/authors/add', authorData);
      // Réinitialiser le formulaire ou effectuer d'autres actions après l'ajout
      setAuthorData({
        name: '',
        email: '',
        age: ''
      });
      console.log('Author added successfully');
    } catch (error) {
      console.error('Error adding author:', error);
    }
  };

  return (
    <div>
      <h2>Add Author</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={authorData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={authorData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" name="age" value={authorData.age} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleAddAuthor}>
          Add Author
        </button>
      </form>
    </div>
  );
};

export default AddAuthor;
