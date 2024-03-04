// src/App.js
import React from 'react';
import AuthorsList from './components/AuthorsList';
import AddAuthor from './components/AddAuthor';
import PublishersList from './components/PublishersList';
import AddPublisher from './components/AddPublisher';
import BooksList from './components/BooksList';
import AddBook from './components/AddBook';

function App() {
  return (
    <div>
      <AuthorsList />
      <AddAuthor />
      <PublishersList />
      <AddPublisher />
      <BooksList />
      <AddBook />
    </div>
  );
}

export default App;
