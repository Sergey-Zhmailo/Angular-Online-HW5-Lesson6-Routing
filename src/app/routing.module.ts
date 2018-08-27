import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { UserEditComponent } from "./components/user-edit/user-edit.component";
import { TodoEditComponent } from "./components/todo-edit/todo-edit.component";
import { TodoAddComponent } from "./components/todo-add/todo-add.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserEditComponent },
  { path: 'todos/:id', component:TodoEditComponent },
  { path: 'new-todo', component: TodoAddComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
