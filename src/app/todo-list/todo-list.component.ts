import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from '../services/todo-service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Output() todoLength = new EventEmitter<number>();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  public addToDo(name: string, description: string, deadline: string) {
    this.todoService.addToDo(name, description, deadline);
    this.todoLength.emit(this.todoService.todoList.length);
  }

  public deleteElement(index: number) {
    this.todoService.deleteElement(index);
    this.todoLength.emit(this.todoService.todoList.length);
  }

  public getElements() {
    return this.todoService.getElements();
  }
  
}


