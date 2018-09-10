import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../../../services/auth.service";
import { Router } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (this.auth.isAuth) this.router.navigate(['/']);
    // Init form
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/)
      ])
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return this.toastr.error('Type correct data', 'Error!');
    this.spinner.show();
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((res: boolean) => {
      this.toastr.success('Success!!!', 'Login in');
      const keyToken = localStorage.getItem('token');
      this.auth.emitIsLoginEvent(keyToken);
      this.router.navigate(['/']);
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, err.error);
    }, () => {
      this.spinner.hide();
    })
  }

  onBlur(name: string) {
    if (this.loginForm.get(name).invalid && this.loginForm.get(name).dirty) {
      this.toastr.error('Password min length 8 car!', 'Error!');
    }
  }

}
