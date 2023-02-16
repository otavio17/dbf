import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private routes: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

                 // provides the route configuration options.
   const { routeConfig } = next; 
   
   // provides the path of the route.
   const { path } = routeConfig as Route; 
   

    if (localStorage.getItem('username') != null) {
     console.log("starter = " +localStorage.getItem('username'));
   
   if(path?.includes('login')){
    this.routes.navigate(['/dashboards/dashboard2']);
   }
      return true;
    } else {
      console.log("login");
      console.log("login path?.includes('login') "+ path?.includes('login'));
      if(path?.includes('login')){  
          console.log("login A");
           return true;
       }else {
        this.routes.navigate(['/login']);
         return false;

       }
    
    }
  }
}
