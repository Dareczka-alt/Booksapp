
('use strict');
const select = {
  templateOf: {
    book: '#template-book',

  },
  containerOf: {
    bookList: '.books-panel .books-list',
    bookImage: '.book__image',
    bookFilter: '.filters',
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
      id: bookId.id,

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
      const link = event.target.offsetParent;
      const bookId = link.getAttribute('data-id');
      if (favoriteBooks.includes(bookId)) {
        const bookIndex = favoriteBooks.indexOf(bookId);
        link.classList.remove('favorite');
        favoriteBooks.splice(bookIndex, 1);

      } else {
        link.classList.add('favorite');
        favoriteBooks.push(bookId);
      }
    }

  });

  const filterOfBooks = document.querySelector(select.containerOf.bookFilter);
  filterOfBooks.addEventListener('click', function (callback) {
    const clickedElement = callback.target;
    console.log(clickedElement.value);

    if (
      clickedElement.tagName == 'INPUT' &&
      clickedElement.type == 'checkbox' &&
      clickedElement.name == 'filter'
    ) {
      if (clickedElement.checked) filters.push(clickedElement.value);
    } else {
      const indexOfFilter = filters.indexOf(clickedElement.value);
      filters.splice(indexOfFilter, 1);
    }
    filterBooks();
  });
}

const filters = [];

function filterBooks() {


  for (let bookId of dataSource.books) {
    bookId = dataSource.books[bookId];
    let shouldBeHidden = false;
    const filterOfHiddenBooks = document.querySelector(
      select.containerOf.bookImage + '[data-id = "' + bookId + '"]'
    );

    for (const filter of filters) {
      if (!bookId.details[filter]) {
        shouldBeHidden = true;
        break;
      }
    }

    if (shouldBeHidden) {
      filterOfHiddenBooks.classList.add('hidden');
    } else {
      filterOfHiddenBooks.classList.remove('hidden');
    }
  }
}

render();
initAction();
