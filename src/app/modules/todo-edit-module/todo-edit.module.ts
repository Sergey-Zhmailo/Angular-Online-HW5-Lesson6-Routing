import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoEditComponent } from "./components/todo-edit/todo-edit.component";
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodoEditComponent
  ],
  providers: [],
  exports: [
    TodoEditComponent
  ],
})
export class TodoEditModule { }
