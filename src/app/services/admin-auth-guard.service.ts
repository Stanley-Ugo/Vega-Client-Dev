import { AuthGuard } from './auth-guard.service';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard extends AuthGuard{

  constructor(auth: AuthService) {
    super(auth);
  }
  canActivate() {
    var isAuthenticated = super.canActivate();
    if (isAuthenticated)
      return true;
    return false;
  }
}
