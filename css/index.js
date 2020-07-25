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
}
// Listen to the all events

addIngredientBtn.addEventListener('click', handleNewIng);
addStepBtn.addEventListener('click', handleSteps);

