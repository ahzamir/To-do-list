import Task from './modules/lists.js';

describe('Task function', () => {
  const tasksObject = new Task();
  tasksObject.add('ahmad');
  tasksObject.add('mahmood');
  tasksObject.add('zaki');

  test('add', () => {
    expect(tasksObject.arrTasks[0].description).toBe('ahmad');
    expect(tasksObject.arrTasks.length).toBe(3);
  });
});
