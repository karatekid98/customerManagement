import { AuthGuardService } from './auth-guard.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Router } from '@angular/router';

const loggedIn = 'isLoggedIn';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthGuardService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login-page']);
      return false;
    }
  }

  public isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem(loggedIn)) {
      status = true;
    } else {
      status = false;
    }
    return status;
  }
}
