const booksLoaded = (newBooks) => ({ type: 'BOOKS_LOADED', payload: newBooks });

const booksRequested = () => ({ type: 'BOOKS_REQUESTED' });

const booksError = (error) => ({ type: 'BOOKS_ERROR', payload: error });

export {
  booksLoaded,
  booksRequested,
  booksError
};