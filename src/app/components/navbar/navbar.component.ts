import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  textLogo: string = "Routing | HW5 | Lesson6 | Sergey Zhmailo | Angular Online";
  constructor() { }

  ngOnInit() {
  }

}
