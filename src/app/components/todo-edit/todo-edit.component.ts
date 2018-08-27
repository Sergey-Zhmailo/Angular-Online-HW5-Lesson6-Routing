import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from 'ngx-spinner';
import { Todo } from "../../models/Todo";
import { TodosService } from "../../services/todos.service";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
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
    }, err => {
      this.toastr.error('Todo not loaded', 'Error');
    });

    this.spinner.hide();
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
