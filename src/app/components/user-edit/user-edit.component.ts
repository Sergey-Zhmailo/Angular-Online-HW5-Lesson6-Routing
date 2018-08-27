import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../../models/User";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId: string;
  user: User;
  isReadOnly = true;

  constructor(
    public userService: UsersService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    // Get user id
    this.userId = this.activatedRoute.snapshot.params['id'];
    // Get user data
    this.userService.getUser(this.userId).subscribe((userData: User) => {
      this.user = userData;
    }, err => {
      this.toastr.error('User not loaded', 'Error');
    });
    this.spinner.hide();
  }

  onEdit() {
    this.spinner.show();
    this.isReadOnly = false;
    const updatedUser: User = Object.assign({}, this.user);
    // Update user
    this.userService.updateUser(updatedUser).subscribe((updUserData: User) => {
      // show message
      this.toastr.success('User edited', 'Success');
      // Redirect home
      this.router.navigate(['/']);
      this.spinner.hide();
    }, err => {
      // Show error message
      this.toastr.error(err.message, 'Error');
      console.log(err);
    });
  }

}
