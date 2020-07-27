// References
console.log('works');
const formEl = document.querySelector('form')
const ingredientsCont = document.querySelector('.ingredients-container');
const addIngredientBtn = document.querySelector('.add-ingredient');
const ingredientContent = document.querySelector('.ingredient');
const stepCont = document.querySelector('.step-container');
const addStepBtn = document.querySelector('.add-step');
const stepContent = document.querySelector('.cooking-step');
const submitButton = document.querySelector('.submit-button');
const recipeName = document.querySelector('#name');
const image = document.querySelector('#image');
const cookName = document.querySelector('#cook-name');
const level = document.querySelector('#level');
const duration = document.querySelector('#duration')

// This function will creat Html in order to enable a user add new ingredients and append it into the DOM
const handleNewIng = () => {
  myHtml = `
  <div class="new-igredient-container">
    <label class="new-description">
      <input type="text" class="new-ingredient" value = "${ingredientContent.value}" required>
    </label>
  </div>
  `;
  ingredientsCont.insertAdjacentHTML('beforeend', myHtml);
}

// This function will creat Html in order to new add step and append it into the DOM
const handleSteps = () => {
  myHtml = `
  <div class="new-step-container">
    <input type="text" class="new-step" required>
  </div>
  `;
  stepCont.insertAdjacentHTML('beforeend', myHtml);
};

// Covert form into object

const handleNewObj = (event) => {
  event.preventDefault();
  return recipes = `[
    {
      title: '${recipeName.value}',
      picture: '${image.value}',
      author: '${cookName.value}',
      difficulty: '${level.value}',
      timing: '${duration.value}',
      ingredients: ['eggs', 'salt', 'water'],
      steps: [
        'Put a pan on the fire',
        'Crack the eggs on it',
        'Wait, put them out',
        'Add some salt on it',
      ],
    },
  ]`;
};

// Assign the converted function above
const handleSubmit = (e) => {
  e.preventDefault();
  const newObj = handleNewObj;
  console.log(newObj);
};

// Listen to the all events
addIngredientBtn.addEventListener('click', handleNewIng);
addStepBtn.addEventListener('click', handleSteps);
formEl.addEventListener('submit', handleSubmit);
