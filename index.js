// function fetchBooks(titleArray) {
//   fetch(`https://anapioficeandfire.com/api/books`,{
//     method:`GET`,
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body:JSON.stringify(titleArray)
//   })
//   .then(res => res.json())
// }
// console.log(fetchBooks)

function fetchBooks() {
  return fetch(`https://anapioficeandfire.com/api/books`,
   )
   .then(res => res.json()) 
   .then(res => renderBooks(res))
};

 function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

console.log(renderbooks(fetchBooks()));


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
