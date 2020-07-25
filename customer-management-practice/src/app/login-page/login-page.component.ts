import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  signin: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;
  get passwordInput(): any {
    return this.signin.get('password');
  }

  constructor() { }

  ngOnInit(): void {

  }

}
