import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authService.userValue;
    if (user) {
      if (
        route.data['allowedRoles'] &&
        route.data['allowedRoles'].indexOf(user?.role) === -1
      ) {
        const redirectURL =
          (user.role === 'Admin' || user.role === 'Instructor')
            ? '/layout/admin/dashboard'
            : '/layout/user/dashboard';
        this.router.navigate([redirectURL]);
      }
      return true;
    }
    this.router.navigate(['/login'], {
      queryParams: { redirectAfterLoginURL: state.url }, // SKIP if always redirect to respective dashboard
    });
    return false;
  }
}