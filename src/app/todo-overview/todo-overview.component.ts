import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styles: []
})
export class TodoOverviewComponent implements OnInit {

  public todoList : Todo[];
  
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(
      data => {        
        this.todoList = data;
      },
      err => {
        alert('Something went wrong!');
      });
  }

}
