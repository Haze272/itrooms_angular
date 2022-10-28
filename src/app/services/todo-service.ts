export class Todo {
    name: string;
    description: string;
    deadline: string;
    createdDate: string;
  
    constructor(
      _name: string,
      _description: string,
      _deadline: string
    ) {
      this.name = _name;
      this.description = _description;
      this.deadline = _deadline;
      this.createdDate = Date().toLocaleString();
    }
}

export class TodoService {
    todoList: Todo[] = [];

    public addToDo(name: string, description: string, deadline: string) {
        let todo: Todo = new Todo(name, description, deadline);
    
        this.todoList.push(todo);
    }
    
    public deleteElement(index: number) {
        this.todoList.splice(index, 1);
    }

    public getElements() {
        return this.todoList;
    }
}