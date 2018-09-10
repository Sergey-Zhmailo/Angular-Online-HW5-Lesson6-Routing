import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./components/home/home.component";
import { BgDirective } from "./directives/bg.directive";
import { CustomclassDirective } from "./directives/customclass.directive";
import { CustomstyleDirective } from "./directives/customstyle.directive";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule
  ],
  declarations: [
    HomeComponent,
    BgDirective,
    CustomclassDirective,
    CustomstyleDirective,
    AboutComponent
  ],
  providers: [],
  exports: [
    HomeComponent,
    AboutComponent
  ]
})
export class HomeModule { }
