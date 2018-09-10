import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  textLogo: string = "Routing | HW5/6/7/8 | Lesson6/7/8/9 | Sergey Zhmailo | Angular Online";
  public logOut: boolean = false;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
    // Login logout event
    this.authService.isLoginEvent.subscribe(key => {
      if (key) {
        this.logOut = true;
      } else {
        this.logOut = false;
      }
    });
  }

  onLogout() {
    const key = 'token';
    this.authService.logout(key).subscribe( res => {
      this.router.navigate(['login']);
    }, err => {
      console.log(err.message);
    })
  }

}
