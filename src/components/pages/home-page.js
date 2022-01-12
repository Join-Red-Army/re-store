import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
  const books = [
    {id: 1, title: 'Alice in Wonderland', author: 'Lewis Carroll'},
    {id: 2, title: 'Call of Cthulhu', author: 'Howard Lovecraft'},
  ];

  return (
    <BookList books={books} />
  );
};

export default HomePage;