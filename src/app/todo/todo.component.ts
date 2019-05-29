import { Component, OnInit } from '@angular/core';

import { TodoInterface } from '../interfaces/todo-interface';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  newTodo: TodoInterface = new Todo();

  todos: TodoInterface[] = [
    { title: 'Clean the kitchen', isCompleted: false, isDeleted: false },
    { title: 'Mow the lawn', isCompleted: false, isDeleted: false },
    { title: 'Clean the gutters', isCompleted: false, isDeleted: false },
    { title: 'Take out the trash', isCompleted: false, isDeleted: false },
  ];

  toggleCompleted(todo: TodoInterface): void { todo.isCompleted = !todo.isCompleted; }

  toggleDeleted(todo: TodoInterface): void { todo.isDeleted = !todo.isDeleted; }

  addTodo(): void {
    if (this.newTodo.title.trim() !== '') {
      this.todos.push(this.newTodo);
      this.newTodo = new Todo();
    }
  }

  emptyTodoTrash(): void {
    this.todos = this.todos.filter(todo => !todo.isDeleted);
    // let newArr = [];
    // this.todos.forEach(todo => {
    //   if (!todo.isDeleted) {
    //     newArr.push(todo);
    //   }
    // });

    // let newArr = this.todos.map(todo => {
      // return todo.isDeleted;
    // })
  }

  ngOnInit() {
  }

}
