import React, {Component} from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import { WithBookstoreService } from '../hoc';
import { booksLoaded, booksRequested } from '../../actions';
import { compose } from '../../utils';
import './book-list.css';

import Spinner from '../spinner';

class BookList extends Component {
  
  componentDidMount() {
    // получить данные из сервиса,
    // затем задиспатчить их в store
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    booksRequested();
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;

    if (loading) return <Spinner />

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
  return {books: state.books, loading: state.loading};
};

const mapDispatch = {booksLoaded, booksRequested};

export default compose(
  WithBookstoreService(),
  connect(mapState, mapDispatch),
)(BookList);

// export default WithBookstoreService()(connect(mapState, mapDispatch)(BookList));