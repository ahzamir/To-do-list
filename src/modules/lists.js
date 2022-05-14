export default class Task {
  constructor(arrTasks) {
    this.arrTasks = arrTasks || [{
      description: 'ahmad',
      completed: false,
      index: 1,
    }];
  }

  add = (description) => {
    const completed = false;
    const index = this.arrTasks.lenght;
    this.arrTasks.push({
      description,
      completed,
      index,
    });
  }

  // remove = () => {
  //   this.arrTasks = this.arrTasks.filter((task) => {
  //     const newIndexFromArray = task.index;
  //     return (newIndexFromArray !== index);
  //   });
  // }

  // edit = () => {
    
  // }

  // getAll = () => this.arrTasks;
}