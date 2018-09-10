import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from 'ngx-spinner';
import { Todo } from "../../models/Todo";
import { TodosService } from "../../../../services/todos.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  addNewTodoForm: FormGroup;

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

    // Init form
    this.addNewTodoForm = new FormGroup({
      userid: new FormControl('1', [
        Validators.required,
        Validators.maxLength(16),
        Validators.pattern(/^[0-9]*$/)
      ]),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[а-яА-ЯёЁa-zA-Z0-9\s]*$/)
      ]),
      completed: new FormControl('', [
        Validators.required,
        Validators.pattern(/^true$|^false$/)
      ])
    });
  }

  onAddNewTodo() {
    if (this.addNewTodoForm.invalid) return this.toastr.error('Type correct data', 'Error!');
    this.spinner.show();

    const newTodo: Todo = {
      userId: this.addNewTodoForm.value.userid,
      title: this.addNewTodoForm.value.title,
      id: this.todos.length + 1,
      completed: this.addNewTodoForm.value.completed
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
