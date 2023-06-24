{
  ('use strict');

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
      console.log('generatedHTML:', generatedHTML);


      const listOfBook = document.querySelector('books-list');
      const elem = utils.createDOMFromHTML(generatedHTML);
      listOfBook.appendChild(elem);
    }
  }


  render();
}