import { AuthGuardService } from './auth-guard.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


const loggedIn = 'isLoggedIn';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthGuardService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.isLoggedIn) {
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
    }
    else {
       status = false;
       }
    return status;
    }
}
