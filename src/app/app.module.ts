import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RoutingModule} from "./routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from "@angular/forms";
import { MySlicePipe } from "./pipes/mySlice.pipe";
import { JoinPipe } from "./pipes/join.pipe";
import { MyIfDirective } from './directives/my-if.directive';
import { MyLoopDirective } from './directives/my-loop.directive';
import { CustomDatePipe } from "./pipes/customDate.pipe";
import { CustomSumPipe } from "./pipes/customSum.pipe";

// Custom modules
import { HomeModule } from "./modules/home-module/home.module";
import { LoginModule } from "./modules/login-module/login.module";
import { RegisterModule } from "./modules/register-module/register.module";
import { NavbarModule } from "./modules/navbar-module/navbar.module";
import { NotFoundModule } from "./modules/not-found-module/not-found.module";
import { TodoAddModule } from "./modules/todo-add-module/todo-add.module";
import { TodoEditModule } from "./modules/todo-edit-module/todo-edit.module";

@NgModule({
  declarations: [
    AppComponent,
    MySlicePipe,
    JoinPipe,
    MyIfDirective,
    MyLoopDirective,
    CustomDatePipe,
    CustomSumPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    NavbarModule,
    NotFoundModule,
    TodoAddModule,
    TodoEditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
