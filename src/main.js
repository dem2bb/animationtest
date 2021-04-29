import { showInputError, removeInputError } from './messages';
import validate from './validate';

const refs = {
  form: document.querySelector('.myform'),
  inputName: document.getElementById('name'),
  inputEmail: document.getElementById('email'),
};

const inputs = [refs.inputName, refs.inputEmail];

inputs.forEach(el => {
  el.addEventListener('blur', () => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      removeInputError(el);
      showInputError(el);
    }
  });
  el.addEventListener('focus', () => removeInputError(el));
});

const validationForm = inputs => {
  let isValids = true;
  inputs.forEach(el => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      removeInputError(el);
      showInputError(el);
      isValids = false;
    }
    return isValidInput;
  });
  return isValids;
};

const onHandleSubmit = e => {
  e.preventDefault();
  const isValidForm = validationForm(inputs);
  if (!isValidForm) return;
  console.log('SUBMITED!!');
};

refs.form.addEventListener('submit', onHandleSubmit);
