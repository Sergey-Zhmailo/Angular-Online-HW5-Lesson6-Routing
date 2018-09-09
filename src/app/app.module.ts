import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RoutingModule} from "./routing.module";
import { HttpClientModule } from "@angular/common/http";
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { NgxSpinnerModule } from 'ngx-spinner';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { MySlicePipe } from "./pipes/mySlice.pipe";
import {JoinPipe} from "./pipes/join.pipe";
import { BgDirective } from './directives/bg.directive';
import { CustomstyleDirective } from './directives/customstyle.directive';
import { CustomclassDirective } from './directives/customclass.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { MyLoopDirective } from './directives/my-loop.directive';
import {CustomDatePipe} from "./pipes/customDate.pipe";
import {CustomSumPipe} from "./pipes/customSum.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    UserEditComponent,
    TodoEditComponent,
    TodoAddComponent,
    LoginComponent,
    RegisterComponent,
    MySlicePipe,
    JoinPipe,
    BgDirective,
    CustomstyleDirective,
    CustomclassDirective,
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
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
