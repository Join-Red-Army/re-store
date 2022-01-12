import React from 'react';
import './app.css';
import { WithBookstoreService } from '../hoc';

const App = ({ bookstoreService }) => {
  const books = bookstoreService.getBooks().map(el => <li key={el.id}>{el.title}</li>);

  return <div className='app'>{books}</div>
};

export default WithBookstoreService()(App);