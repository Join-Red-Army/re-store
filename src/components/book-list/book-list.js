import React, {Component} from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import { WithBookstoreService } from '../hoc';
import { booksLoaded, booksRequested } from '../../actions';
import { compose } from '../../utils';
import { booksError } from '../../actions';
import './book-list.css';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class BookList extends Component {
  
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) return <Spinner />

    if (error) {
      return <ErrorIndicator/>
    }

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}>
                <BookListItem book={book} />
              </li>
            )
          })
        }
      </ul>
    );
  };

};


const mapState = (state) => {
  return {books: state.books, loading: state.loading, error: state.error};
};

// const mapDispatch = {booksLoaded, booksRequested, booksError};
const mapDispatch = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());

      bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)) )
        .catch((err) => dispatch(booksError(err)) );
    }

  }
}

export default compose(
  WithBookstoreService(),
  connect(mapState, mapDispatch),
)(BookList);

// export default WithBookstoreService()(connect(mapState, mapDispatch)(BookList));