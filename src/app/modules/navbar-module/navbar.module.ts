import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [],
  exports: [
    NavbarComponent
  ],
})
export class NavbarModule { }
