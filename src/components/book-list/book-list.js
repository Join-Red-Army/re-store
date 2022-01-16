import React, {Component} from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import { WithBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import { booksError } from '../../actions';
import './book-list.css';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


const BookList = ({ books, onAddedToCart }) => {
  
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem 
                book={book} 
                onAddedToCart={() => onAddedToCart(book.id)}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

class BookListContainer extends Component {
  
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) return <Spinner />
    if (error) return <ErrorIndicator/>

    return <BookList books={books} onAddedToCart={onAddedToCart}/>
  }
};



const mapState = (state) => {
  return {books: state.books, loading: state.loading, error: state.error};
};


// const mapDispatch = (dispatch, { bookstoreService } ) => {
const mapDispatch = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return { 
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  };
};

export default compose(
  WithBookstoreService(),
  connect(mapState, mapDispatch),
)(BookListContainer);

// export default WithBookstoreService()(connect(mapState, mapDispatch)(BookList));