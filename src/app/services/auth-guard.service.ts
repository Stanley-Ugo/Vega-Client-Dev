import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(protected auth: AuthService) { }
  canActivate() {
    if(this.auth.isAuthenticated$)
    return true;

    window.location.href = 'http://localhost:4200/vehicles'
    return false;
  }
}
