
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
  const listOfBook = document.querySelector(select.containerOf.bookList);
  listOfBook.addEventListener('dblclick', function (event) {
    event.preventDefault();
    if (event.target.offsetParent.classList.contains('book__image')) {

      const allImages = document.querySelectorAll(select.containerOf.bookImage);
      for (let image of allImages) {

        const bookId = image.getAttribute('data-id');

        if (!favoriteBooks.includes(bookId)) {
          image.classList.add('favorite');
          favoriteBooks.push(bookId);

        } else {
          const bookIndex = bookId;
          image.classList.remove('favorite');
          favoriteBooks.splice(bookIndex, 1);
        }
      }
    }
  });
}

render();
initAction();