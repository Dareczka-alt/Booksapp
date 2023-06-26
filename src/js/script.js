
('use strict');

const templates = {
  bookLink: Handlebars.compile(document.querySelector('#template-book').innerHTML),
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


    const listOfBook = document.querySelector('.books-panel .books-list');

    const elem = utils.createDOMFromHTML(generatedHTML);

    listOfBook.appendChild(elem);
  }

}


const favoriteBooks = [];
console.log(favoriteBooks);

function initActions() {
  const listOfBook = document.querySelector('.books-panel .books-list');

  const booksImages = listOfBook.querySelectorAll('.book .book_image');
  console.log(booksImages);


  for (let i = 0; i < booksImages.length; i++) {
    const clickedElement = this;
    clickedElement.addEventListener('dblclick', function (event) {
      event.preventDefault();
      clickedElement.classList.add('favorite');
    });
  }
}

render();
initActions();
