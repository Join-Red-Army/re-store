// отвечает за получение данных о книгах

const books = [
  {id: 1, title: 'Alice in Wonderland', author: 'Lewis Carroll'},
  {id: 2, title: 'Call of Cthulhu', author: 'Howard Lovecraft'},
];

export default class BookstoreService {

  getBooks() {
    return books;
  }

};