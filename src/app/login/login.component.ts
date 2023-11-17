import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  taskForm!: FormGroup;
  loginForm: any;

  constructor(private frm: FormBuilder,
    private router: Router) { }
  ngOnInit() {
    this.loginForm = this.frm.group({
      username: '',
      password: ''
    })
  }

  onFormSubmit() {
    const username = 'user'; // Replace with the actual username for a regular user.
    const password = 'user'; // Replace with the actual password for a regular user.
    const superuserUsername = 'admin'; // Replace with the actual superuser username.
    const superuserPassword = 'admin'; // Replace with the actual superuser password.

    if (this.loginForm.valid) {
      if (username === this.loginForm.value.username && password === this.loginForm.value.password) {
        // Redirect to the user component.
        this.router.navigate(['/user']);
      } else if (superuserUsername === this.loginForm.value.username && superuserPassword === this.loginForm.value.password) {
        // Redirect to the admin component.
        this.router.navigate(['/admin']);
      } else {
        alert("This is not the correct information.");
      }
    }
  }
}
