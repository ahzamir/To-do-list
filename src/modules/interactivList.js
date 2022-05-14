import {changeCompletedStatusInObject} from '../index.js'
const check = (event) => {
  const eventId = event.target.id;
  const index = parseInt(eventId.replace('check', ''), 10);
  changeCompletedStatusInObject(index);
};

const checkboxAction = () => {
  const checkBoxes = document.querySelectorAll('.taskCheck');
  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => check(e));
  });
}

export default checkboxAction;