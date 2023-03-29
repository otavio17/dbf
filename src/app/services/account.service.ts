import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';


@Injectable({ providedIn: 'root' })
export class AccountService {
    public userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;
    private hasUser = false;
    public headers: any;


    constructor(
        private translate: TranslateService,
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
        this.headers  = new HttpHeaders()
        .set('Content-Type', '*')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
        .set('Accept', 'application/json');
        this.translate.setDefaultLang('br');
    }
    
    getTranslate():TranslateService{
        return this.translate;
    }

    public get userValue() {
        if(this.userSubject.value != null)
        return JSON.parse(localStorage.getItem('user')+"");
    }
   

   async setTrans(t:any) {
        this.translate.use(t);
        this.translate.setDefaultLang(t);
    }
   

    login(username: string, password: string) {
        console.log('username: '+username);
        console.log('password: '+password);
      let data = {
        email:username,
        password:password 
    };
    let headers = new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRF-Token"});

    let options = { headers: headers };

      return this.http.post<any>(`${environment.apiUrl}/users/login`,data,options)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('username', user.name);
                localStorage.setItem('email', username);
                localStorage.setItem('token', user.token);
                this.userSubject.next(user);
                this.userSubject.complete();
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('username');
        localStorage.removeItem('user');
        this.userSubject.next({} as  User)
        this.router.navigate(['/login']);
        
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id: any, params: any) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue?.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: any) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue?.id) {
                    this.logout();
                }
                return x;
            }));
    }

    changeProfileEmail(id: any, email:any){
        let data = {
          email:email,
      };
 
        return this.http.patch<any>(`${environment.apiUrl}/users/edit/`+id,data)
              .pipe(map(user => {
                  return user;
              }));
      }
  
}

          