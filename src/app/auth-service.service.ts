import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


constructor(private authService: ServicesService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // User is logged in, allow access to the route
    } else {
      this.router.navigate(['/login']); // Redirect to the login page if not logged in
      return false;
    }
  }
}