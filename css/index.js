// References
console.log('works');
const formElement = document.querySelector('form');
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

// This function will creat Html in order to new add ingredients and append it into the DOM
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

const handleSteps = () => {
  myHtml = `
  <div class="new-step-container">
    <input type="text" class="new-step" value = "${stepContent.value}" required>
  </div>
  `;
  stepCont.insertAdjacentHTML('beforeend', myHtml);
};

const cookObject = () => {
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


const submitObj = () => {
  const newObj = cookObject();
  console.log(newObj);
};

// Listen to the all events

addIngredientBtn.addEventListener('click', handleNewIng);
addStepBtn.addEventListener('click', handleSteps);
submitButton.addEventListener('submit', submitObj);
