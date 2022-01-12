import React, {Component} from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import { WithBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import './book-list.css';


class BookList extends Component {
  
  componentDidMount() {
    // 1. получить данные из сервиса
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    console.log(data);
    // 2. передать данные в store
    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;

    return (
      <ul>
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
  return {books: state.books};
};

const mapDispatch = {booksLoaded};

export default WithBookstoreService()(connect(mapState, mapDispatch)(BookList));