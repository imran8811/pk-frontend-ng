import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminAuthService } from 'src/services'

@Injectable({ providedIn: 'root' })

export class AdminAuthGuard implements CanActivate {

  constructor(private adminAuthService : AdminAuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const checkSession = this.adminAuthService.isLoggedIn();
    if(checkSession === true) {
      return true
    } else {
      this.router.navigate(['/admin/login']);
      return false
    }
  }
  
}
