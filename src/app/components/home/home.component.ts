import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { User } from "../../models/User";
import { NgxSpinnerService } from 'ngx-spinner';
import { Todo } from "../../models/Todo";
import { TodosService } from "../../services/todos.service";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];
  todos: Todo[];

  constructor(
    public userService: UsersService,
    private spinner: NgxSpinnerService,
    public todoService: TodosService,
    private toastr: ToastrService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // Get todos
    this.spinner.show();
    this.todoService.getTodos().subscribe((todoData: Todo[]) => {
      this.todos = todoData;
      this.spinner.hide();
    });
  }

  onDelete(id:number) {
    this.spinner.show();
    this.todoService.deleteTodo(id).subscribe((data: object) => {
      this.todos = this.todos.filter(todo => todo.id != id);
      this.spinner.hide();
      this.toastr.success('Todo deleted success', 'Message');
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, 'Error')
    });
  }

}
