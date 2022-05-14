import _ from 'lodash';// eslint-disable-line no-unused-vars
import './style.css';
import Task from './modules/lists.js';

const creatNewTasks = (arrTasks) => {
  arrTasks.sort((a, b) => a.index - b.index);
  const tasks = document.getElementById('tasks');
  tasks.innerHTML = '';
  const everyTasks = document.createElement('div');
  everyTasks.classList.add('tasksss');
  arrTasks.forEach((task) => {
    const everyTask = `<div class="task"><input type="checkbox" class="taskCheck"><input type="text" class="taskInput" name="task" value="${task.description}"><i class="fa-solid fa-trash-can"></i><i class="fa-solid fa-ellipsis-vertical drop"></i></div>
    `;
    everyTasks.insertAdjacentHTML('beforeend', everyTask);
  });
  tasks.appendChild(everyTasks);
  localStorage.setItem('tasks', JSON.stringify(arrTasks));
};
const addNewTask = () => {
  const inputAdd = document.getElementById('inputAdd');
  tasksObject.add(inputAdd.value);
  creatNewTasks(arrTasks);
  inputAdd.value = '';
};

const tasksObject = new Task(JSON.parse(localStorage.getItem('tasks')));
const arrTasks = tasksObject.arrTasks;
window.addEventListener('DOMContentLoaded', () => {
  const addPart = document.getElementById('addPart');
  const inputAdd = document.createElement('input');
  const addButton = document.createElement('i');
  addButton.classList.add('fa-solid')
  addButton.classList.add('fa-plus')
  inputAdd.setAttribute('type', 'text');
  inputAdd.setAttribute('placeholder', 'Add to your list...');
  inputAdd.setAttribute('id', 'inputAdd')
  addPart.appendChild(inputAdd);
  addPart.appendChild(addButton);
  creatNewTasks(arrTasks);
  addButton.addEventListener('click', () => addNewTask());
});