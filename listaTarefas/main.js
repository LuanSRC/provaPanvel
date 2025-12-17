class Task {
  title;
  description;
  constructor(title, description) {
    (this.title = title), (this.description = description);
  }

  getTask() {
    return `${this.title} - ${this.description}`;
  }
}

class TaskList {
  list = [];

  addTask(task) {
    this.list.push(task);
  }
  getSize() {
    return `${this.list.length}`;
  }
}

const list = new TaskList();
const task1 = new Task("Wash car", "I need to clean my car today");
const task2 = new Task("Shop", "Buy new shirts");
const task3 = new Task("Cardio", "Run 1 km before tonight");

list.addTask(task1);
list.addTask(task2);
list.addTask(task3);

console.log(list);
console.log(list.getSize());
