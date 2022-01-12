const initialState = {
  books: [
    {id: 1, title: 'Alice in Wonderland', author: 'Lewis Carroll'},
    {id: 2, title: 'Call of Cthulhu', author: 'Howard Lovecraft'},
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'BOOKS_LOADED': 
      return { books: action.payload };

    default: return state;
  }
};

export default reducer;