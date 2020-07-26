import { LocalStorageService } from './../local-storage.service';
import { AuthGuardService } from './../auth/auth-guard.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public usernameDef;
  public passwordDef;

  public user: User = {
    username: '',
    password: ''
  };
  hide = true;
  matcher = new ErrorStateMatcher();

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  constructor(private localStorageService: LocalStorageService, private authService: AuthGuardService, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/customers']);
  }

  logIn(userForm): void {
    this.usernameDef = this.authService.returnUserAndPass().username;
    this.passwordDef = this.authService.returnUserAndPass().password;

    if (this.user.username === this.usernameDef && this.user.password === this.passwordDef) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/customers']);

    } else {
      alert('niste uspeli');
      localStorage.setItem('isLoggedIn', 'false');
    }
  }

}
