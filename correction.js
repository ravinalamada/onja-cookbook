const addIngredientBtn = document.querySelector('button.addIngredient');
const ingredientListElement = document.querySelector('#ingredientList');
const addStepBtn = document.querySelector('button.addStep');
const stepListElement = document.querySelector('#stepList');
const formElement = document.querySelector('#addRecipeForm');
const recipes = [];

// 1) Generate add ingredient input
const addIngredientInput = e => {
	const number = ingredientListElement.children.length + 1;
	const liHTML = `<li><input id="ingredient${number}" type="text" name="ingredient${number}" value="Ingredient ${number}"/></li>`;
	ingredientListElement.insertAdjacentHTML('beforeend', liHTML);
};

// 2) Generate add steps input
const addStepInput = e => {
	const number = stepListElement.children.length + 1;
	const liHTML = `<li><input id="step${number}" type="text" name="step${number}" value="Step ${number}"/></li>`;
	stepListElement.insertAdjacentHTML('beforeend', liHTML);
};

const handleSubmit = e => {
	e.preventDefault();
	console.log('submit', e);
	const form = e.currentTarget;
	const { title, picture, author, difficulty, timing } = form;
	// how can I grab back the ingredients and the input?
	const ingredients = [];
	for (let i = 0; i < ingredientListElement.children.length; i++) {
		ingredients.push(ingredientListElement.children[i].children[0].value);
	}
	console.log(ingredients);
	const steps = [];
	for (stepChildren of stepListElement.children) {
		steps.push(stepChildren.children[0].value);
	}
	console.log(steps);

	// create the object
	const recipe = {
		title: title.value,
		picture: picture.value,
		author: author.value,
		difficulty: difficulty.value,
		timing: timing.value,
		ingredients: ingredients,
		steps: steps,
	};
	console.log(recipe);
	recipes.push(recipe);
};

addStepBtn.addEventListener('click', addStepInput);
addIngredientBtn.addEventListener('click', addIngredientInput);
formElement.addEventListener('submit', handleSubmit);
