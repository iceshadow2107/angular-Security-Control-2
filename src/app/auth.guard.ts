import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, public authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('canActivate');
    return this.canEnter();
  }

  canActivateChild(): Observable<boolean> {
    return this.canEnter();
  }

  canEnter(): Observable<boolean> {
    return this.authService.setToken$.pipe(
      map((isLogin) => {
        if (!isLogin) {
          this.router.navigate(['/', 'login']);
        }
        return !!isLogin;
      })
    );
  }
}