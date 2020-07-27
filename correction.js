// Generate add ingredient input
const formEl = document.querySelector('#fom')
const addIngredientBtn = document.querySelector('button.add-ingredient');
const ingredientsList = document.querySelector('#ingredient-list');
const stepList = document.querySelector('#step-list');


const addIngredientInput = event => {
  const number = ingredientsList.children.length + 1;
  const html = `
    <li>
      <input type="text" id="ingredient${number}" name="ingredient${number}" value="step 1">
    </li>
  `
  ingredientsList.insertAdjacentHTML('beforeend', html);
};

const addStepInput = event => {
  const number = stepList.children.length + 1;
  const html = `
    <li>
      <input type="text" id="step${number}" name="step${number}" value="step 1">
    </li>
  `
  stepList.insertAdjacentHTML('beforeend', html);
};

const handleSubmit = event => {
  event.preventDefault();
  const form = event.currentTarget;
  const { title, picture, author, difficulty, timing} = form;
  // How can I grab back the ingredients and the input?
  const ingredients = [];
  for (let i = 0; i < ingredientsList.children.length; i++) {
    ingredients.push(ingredientsList.children[i].children[0].value);
  };
  console.log(ingredients);
  const steps = [];
  for (stepChildren of stepList.children) {
    steps.push(stepChildren.children[0].value);
  }

};

addIngredientBtn.addEventListener('click', addIngredientInput);
addIngredientBtn.addEventListener('click', addStepInput);
formEl.addEventListener('submit', handleSubmit);

