import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from 'ngx-spinner';
import { Todo } from "../../models/Todo";
import { TodosService } from "../../../../services/todos.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todoEditForm: FormGroup;

  todo: Todo;
  todoId: number;
  isReadOnly = true;

  constructor(
    public todoService: TodosService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();

    this.todoId = this.activatedRoute.snapshot.params['id'];
    this.todoService.getTodo(this.todoId).subscribe((todoData: Todo) => {
      this.todo = todoData;
      this.todoEditForm.get('userid').setValue(this.todo.userId);
      this.todoEditForm.get('title').setValue(this.todo.title);
      this.todoEditForm.get('completed').setValue(this.todo.completed);
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
      this.toastr.error('Todo not loaded', 'Error');
    });

    // Init Form
    this.todoEditForm = new FormGroup({
      userid: new FormControl('', [
        Validators.required,
        Validators.maxLength(16),
        Validators.pattern(/^[0-9]*$/)
      ]),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[а-яА-ЯёЁa-zA-Z0-9\s,.]*$/)
      ]),
      completed: new FormControl('', [
        Validators.required,
        Validators.pattern(/^true$|^false$/)
      ])
    });
  }

  onEditTodo() {
    this.spinner.show();

    this.isReadOnly = false;
    const updatedTodo: Todo = Object.assign({}, this.todo);
    this.todoService.updateTodo(updatedTodo).subscribe((updTodoData: Todo) => {
      this.toastr.success('Todo edited', 'Success');
      this.router.navigate(['/']);
      this.spinner.hide();
    }, err => {
      this.toastr.error(err.message, 'Error');
    });


  }

}
