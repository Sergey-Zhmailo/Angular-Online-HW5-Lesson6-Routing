import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

import { homeRoutes } from "./modules/home-module/home-routing";
import { loginRoutes } from "./modules/login-module/login-routing";
import { registerRoutes } from "./modules/register-module/register-routing";
import { notFoundRoutes } from "./modules/not-found-module/not-found-routing";
import { todoAddRoutes } from "./modules/todo-add-module/todo-add-routing";
import { todoEditRoutes } from "./modules/todo-edit-module/todo-edit-routing";

const routes: Routes = [
  { path: 'login', children: [...loginRoutes] },
  { path: 'register', children: [...registerRoutes] },
  { path: '', children: [...homeRoutes], canActivate: [AuthGuard] },
  { path: 'todos/:id', children: [...todoEditRoutes], canActivate: [AuthGuard] },
  { path: 'new-todo', children: [...todoAddRoutes], canActivate: [AuthGuard] },
  { path: '**', children: [...notFoundRoutes] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})
export class RoutingModule { }
