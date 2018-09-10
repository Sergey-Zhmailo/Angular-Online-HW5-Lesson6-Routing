import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule
  ],
  declarations: [
    NotFoundComponent
  ],
  providers: [],
  exports: [
    NotFoundComponent
  ],
})
export class NotFoundModule { }
