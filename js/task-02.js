const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = [];

ingredients.forEach((ingredient) => {

  let listElem = document.createElement('li');
  listElem.textContent = ingredient;
  listElem.classList.add('item');
  listIngredients.push(listElem);
})
  
document.querySelector('#ingredients').append(...listIngredients);

