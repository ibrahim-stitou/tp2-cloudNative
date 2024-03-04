
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PublishersList = () => {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    const fetchPublishers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/publishers/all');
        setPublishers(response.data);
      } catch (error) {
        console.error('Error fetching publishers:', error);
      }
    };

    fetchPublishers();
  }, []);

  return (
    <div>
      <h2>Publishers List</h2>
      <ul>
        {publishers.map((publisher) => (
          <li key={publisher._id}>{publisher.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PublishersList;
