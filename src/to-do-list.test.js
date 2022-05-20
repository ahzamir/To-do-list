import Task from './modules/lists.js';

describe('Task function', () => {
  const tasksObject = new Task();
  tasksObject.add('task 0');
  tasksObject.add('task 1');
  tasksObject.add('task 2');
  tasksObject.add('task 3');
  tasksObject.add('task 4');
  const taskTest = 'Testing task'

  test('Add function', () => {
    expect(tasksObject.arrTasks[0].description).toBe('task 0');
    expect(tasksObject.arrTasks.length).toBe(5);
  });
  test()
  test('Remove function', () => {
    tasksObject.remove(1);
    expect(tasksObject.arrTasks[1].description).toBe('task 2');
  });

  test('Edit function', () => {
    tasksObject.edit(1, 'task 1');
    expect(tasksObject.arrTasks[1].description).toBe('task 1');
    expect(tasksObject.arrTasks.length).toBe(4);
  });
});
