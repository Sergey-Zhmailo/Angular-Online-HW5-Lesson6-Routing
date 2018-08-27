import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from 'ngx-spinner';
import { Todo } from "../../models/Todo";
import { TodosService } from "../../services/todos.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todo: Todo = {
    userId: 1,
    id: 1,
    title: 'new todo',
    completed: false
  };
  todoId: number;
  todos: Todo[];

  constructor(
    public todoService: TodosService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.todoService.getTodos().subscribe((todoData: Todo[]) => {
      this.todos = todoData;
      this.spinner.hide();
    });
  }

  onAddNewTodo() {
    this.spinner.show();

    const newTodo: Todo = {
      userId: this.todo.userId,
      title: this.todo.title,
      id: this.todos.length + 1,
      completed: this.todo.completed
    };
    this.todoService.addNewTodo(newTodo).subscribe((newTodoData: Todo) => {
      this.toastr.success('Todo added', 'Success');
      this.router.navigate(['/']);
      this.spinner.hide();
    }, err => {
      this.toastr.error(err.message, 'Error');
      this.spinner.hide();
    });
  }

}
