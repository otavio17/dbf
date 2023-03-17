import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class RestService  {
  public headers: any;
  public currentUser: any;


  constructor(
    private router: Router,
    private http: HttpClient,
    public accountService: AccountService
) {
    this.currentUser = this.accountService.userValue;
    console.log("this.currentUser.token= "+this.currentUser.token);
  this.headers  = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization':  'bearer '+this.currentUser.token,
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRF-Token"});
    
}


resTransactionsListUserAll() {
  return this.http.get<any>(`${environment.apiUrl}/transactions/list/user/all`,{ headers: this.headers  })
        .pipe(map(data => {
            
            return data;
        }));
}

resCountryListAll() {
  return this.http.get<any>(`${environment.apiUrl}/country/list/all`,{ headers: this.headers  })
        .pipe(map(data => {
            return data;
        }));
}

resTransactionsListCompanieAll() {
  return this.http.get<any>(`${environment.apiUrl}/transactions/list/companie/all`,{ headers: this.headers  })
        .pipe(map(data => {
            return data;
        }));
}

resListCompanieAll() {
  return this.http.get<any>(`${environment.apiUrl}/companies/list/my`,{ headers: this.headers  })
        .pipe(map(data => {
            return data;
        }));
}

resTransactionsCompaniesListMy(init: string, finish: string, companieId:any) {
  let data = {
    init:init,
    finish:finish,
    companieId:companieId
};

return this.http.post<any>(`${environment.apiUrl}/transactions/companies/list/my`,data,{ headers: this.headers  })
.pipe(map(data => {
    return data;
}));
}


resCompaniesCreate(corporateName: string, fantasy: string, tokenIntegration:string, countryId:any) {
  let data = {
    corporateName:corporateName,
    fantasy:fantasy,
    tokenIntegration:tokenIntegration,
    countryId:countryId
};

return this.http.post<any>(`${environment.apiUrl}/companies/create`,data,{ headers: this.headers  })
.pipe(map(data => {
    return data;
}));
}

resCompaniesListMy() {
  return this.http.get<any>(`${environment.apiUrl}/companies/list/my`,{ headers: this.headers  })
        .pipe(map(data => {
            return data;
        }));
}


resTransactionsUsersListMy(init:any, finish:any, type:any) {
  let data = {
    init: init,
    finish: finish,
    typeTransaction:type 

};
  return this.http.post<any>(`${environment.apiUrl}/transactions/users/list/my`,data,{ headers: this.headers  })
        .pipe(map(data => {
            
            return data;
        }));
}
}
