'use strict';
{
  const templates = {
    bookLink: Handlebars.compile(document.querySelector('#template-book').innerHTML),
  };

  function render() {

    for (let book in dataSource.books) {
      const generatedHTML = templates.bookLink({
        id: book.id,
        name: book.name,
        price: book.price,
        image: book.image,
        rating: book.rating,

      });


      const listOfBook = document.querySelector('.books-list');
      const creation = utils.createDOMFromHTML(generatedHTML);
      listOfBook.appendChild(creation);
    }
  }


  render();
}