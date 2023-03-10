import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilRouterService {

  constructor(private router: Router) {
    
   }

  settings(){
    this.router.navigate(['/pages/settings']);
  }
  profile(){
    this.router.navigate(['/forms/profile']);
  }
}
