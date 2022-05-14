export default class Task {
  constructor(arrTasks) {
    this.arrTasks = arrTasks || [];
  }

  add = (description) => {
    const completed = false;
    const index = this.arrTasks.length;
    this.arrTasks.push({
      description,
      completed,
      index,
    });
  }

  remove = (index) => {
    this.arrTasks = this.arrTasks.filter((task) => {
      return (task.index != index);
    });
    for (var i = index; i < this.arrTasks.length; i++) {
        this.arrTasks[i].index= this.arrTasks[i].index-1;
    }
  }

  // edit = () => {
    
  // }

  // getAll = () => this.arrTasks;
}