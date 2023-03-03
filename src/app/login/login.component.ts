import { AlertService } from 'src/app/services/alert.service';
import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AccountService, AlertService]
})
export class LoginComponent implements OnInit {
  msg = '';
  loading = false;
  submitted = false;
  returnUrl!: string;

  constructor(private alertService:AlertService, private accountService: AccountService, private routes: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(uname: string, p: string): void {
    this.msg = '';
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();


   this.accountService.login(uname, p)
        .pipe(first())
        .subscribe(
            data => {
            //  this.alertService.success("", true);
              console.log("teste sucesso "+JSON.stringify(data));
              this.routes.navigate(['/pages/home']);
              this.routes.navigate(['/pages/home']);
            },
            error => {
              console.log("teste  erro= "+JSON.stringify(error)+"");
              this.msg = error.error.message;
            });
}


}
