
('use strict');
const select = {
  templateOf: {
    book: '#template-book',

  },
  containerOf: {
    bookList: '.books-panel .books-list',
    bookImage: '.book__image',
  },
};

const templates = {
  bookLink: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
};

function render() {

  for (let bookId in dataSource.books) {
    bookId = dataSource.books[bookId];
    const generatedHTML = templates.bookLink({
      name: bookId.name,
      price: bookId.price,
      image: bookId.image,
      rating: bookId.rating,

    });


    const listOfBook = document.querySelector(select.containerOf.bookList);

    const elem = utils.createDOMFromHTML(generatedHTML);

    listOfBook.appendChild(elem);
  }

}


const favoriteBooks = [];


function initAction() {
  const allImages = document.querySelectorAll(select.containerOf.bookImage);

  for (let image of allImages) {
    image.addEventListener('dblclick', function (event) {
      event.preventDefault();
      const bookId = image.getAttribute('data-id');

      if (favoriteBooks.includes(bookId)) {
        image.classList.remove('favorite');
        const indexOfBook = favoriteBooks.indexOf(bookId);
        favoriteBooks.splice(indexOfBook, 1);

      } else {
        image.classList.add('favorite');
        favoriteBooks.push(bookId);
      }
    });
  }
}

render();
initAction();