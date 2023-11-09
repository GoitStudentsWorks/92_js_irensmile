
const elements = {
container: document.querySelector('.js-list'),
totalQuantity: document.querySelector('.js-quantity'),
clearBtn: document.querySelector('.js-close')
}
const BOOKS_KEY_KEY = 'shoppinglist'
const books = JSON.parse(localStorage.getItem(BOOKS_KEY)) ?? [];

elements.container.insertAdjacentHTML('afterbegin', createMarkup(books));

console.log(books);
function createMarkup(arr) {
  return arr.map(({img, titlle, category, desc, author})=> `
  <li class='card-item' class='book-img'>
  <img src='${img}' alt ='${titlle}'>
  <h2>${titlle}</h2>
  <p>${category}</p>
  <h3>${desc}</h3>
  <p>${author}</p>
</li>`).join('');
}

if (books.length){
  const quantity = books.reduce((acc, {qty}) => acc + qty, 0);
  elements.totalQuantity.textContent = quantity;
  elements.container.insertAdjacentHTML('afterbegin', createMarkup(books));
  } else {
    elements.totalQuantity.textContent = 'This page is empty, add some books and proceed to order.'

  }