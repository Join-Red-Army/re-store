// отвечает за получение данных о книгах

export default class BookstoreService {

  data = [
    {
      id: 1, title: 'Alice in Wonderland',
      author: 'Lewis Carroll',
      price: 32, 
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/419Uq8a-y+L._SX298_BO1,204,203,200_.jpg'
    },
    {
      id: 2, 
      title: 'Call of Cthulhu',
      author: 'Howard Lovecraft',
      price: 29, coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51RpsrlmAeL._SX311_BO1,204,203,200_.jpg'
    },
  ];

  getBooks() {
    return new Promise((resolve) => {
      return setTimeout(() => resolve(this.data), 1000);
    });
  }

};