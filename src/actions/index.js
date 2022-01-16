const booksLoaded = (newBooks) => ({ type: 'FETCH_BOOKS_SUCCESS', payload: newBooks });

const booksRequested = () => ({ type: 'FETCH_BOOKS_REQUEST' });

const booksError = (error) => ({ type: 'FETCH_BOOKS_FAILURE', payload: error });

export const bookAddedToCart = (bookId) => ({ type: 'BOOK_ADDED_TO_CART', payload: bookId });

export const bookRemovedFromCart = (bookId) => {
  return { type: 'BOOK_REMOVED_FROM_CART', payload: bookId };
};

export const allBooksRemovedFromCart = (bookId) => {
  return { type: 'ALL_BOOKS_REMOVED_FROM_CART', payload: bookId };
};

export const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());

  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)) )
    .catch((err) => dispatch(booksError(err)) );
}