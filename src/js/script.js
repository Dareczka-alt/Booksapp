{
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
      console.log('generatedHTML:', generatedHTML);


      const listOfBook = document.querySelector('.books-panel .books-list');

      const elem = utils.createDOMFromHTML(generatedHTML);
      console.log('elem:', elem);
      listOfBook.appendChild(elem);
    }
  }


  render();
}