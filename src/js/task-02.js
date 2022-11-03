const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsListArr = [];

const makeIngridientList = ingredients.map(el => {
  const ingredient = document.createElement('li');
  ingredient.textContent = el;
  ingredient.classList.add('item');

  ingredientsListArr.push(ingredient);
});

const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...ingredientsListArr);
