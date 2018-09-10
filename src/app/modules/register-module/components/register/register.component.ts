import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../../../services/auth.service";
import { Router } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (this.auth.isAuth) this.router.navigate(['/']);
    // Init form
    this.registerForm = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
        Validators.pattern(/^[A-z]*$/)
      ]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/)
      ])
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return this.toastr.error('Type correct data', 'Error!');
    this.spinner.show();
    this.auth.register(this.registerForm.value.email, this.registerForm.value.name, this.registerForm.value.password).subscribe((res: boolean) => {
      this.toastr.success('Success!!!', 'Registered');
      this.router.navigate(['/']);
    }, err => {
      this.toastr.error(err.message, err.error);
      this.spinner.hide();
    }, () => {
      this.spinner.hide();
    });
  }

}
