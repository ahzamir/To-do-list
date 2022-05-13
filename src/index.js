import _ from 'lodash';
import './style.css';

const arrTasks = [
  {
    description: 'forth',
    completed: false,
    index: 3,
  },
  {
    description: 'first',
    completed: false,
    index: 0,
  },
  {
    description: 'thirth',
    completed: false,
    index: 2,
  },
  {
    description: 'second',
    completed: false,
    index: 1,
  },
];
const displayTasks = () => {
  arrTasks.sort((a, b) => a.index - b.index);
  const tasks = document.getElementById('tasks');
  const everyTasks = document.createElement('div');
  everyTasks.classList.add('tasksss');
  arrTasks.forEach((task) => {
    const everyTask = `<div class="task"><input type="checkbox" class="taskCheck"><input type="text" class="taskInput" name="task" value="${task.description}"><i class="fa-solid fa-trash-can"></i><i class="fa-solid fa-ellipsis-vertical drop"></i></div>
    `;
    everyTasks.insertAdjacentHTML('beforeend', everyTask);
    console.log(task);
  });
  tasks.appendChild(everyTasks);
}

window.addEventListener('DOMContentLoaded', () => {
  displayTasks();
});