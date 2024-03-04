
import React, { useState } from 'react';
import axios from 'axios';

const AddPublisher = () => {
  const [publisherData, setPublisherData] = useState({
    name: '',
    location: '',
  });

  const handleInputChange = (e) => {
    setPublisherData({ ...publisherData, [e.target.name]: e.target.value });
  };

  const handleAddPublisher = async () => {
    try {
      await axios.post('http://localhost:3000/publishers/add', publisherData);
      // Reset the form or perform other actions after adding
      setPublisherData({
        name: '',
        location: '',
      });
      console.log('Publisher added successfully');
    } catch (error) {
      console.error('Error adding publisher:', error);
    }
  };

  return (
    <div>
      <h2>Add Publisher</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={publisherData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" name="location" value={publisherData.location} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleAddPublisher}>
          Add Publisher
        </button>
      </form>
    </div>
  );
};

export default AddPublisher;

