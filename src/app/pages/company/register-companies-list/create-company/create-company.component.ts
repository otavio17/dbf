import { UtilDateService } from './../../../../services/util/util-date.service';
import { RestService } from 'src/app/services/rest.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountService } from 'src/app/services/account.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss'],
})
export class CreateCompanyComponent implements OnInit {
  public options: FormGroup;
  public currentUser: any;
  public hide = true;
  public formCorporateName:any;
  public formFantasy:any;
  public formToken:any;
  public countryType:any;
  public country: any[] = [];

  ngOnInit(): void {
    this.restService.resCountryListAll()
    .pipe(first())
    .subscribe(
        data => {
        this.country= data.country;
        this.countryType = 1;
        },
        error => {
          console.log("teste  erro= "+JSON.stringify(error)+"");
          alert(error.error.message);
          if(error.error.message.includes("Token"))
          this.accountService.logout();
        });
  }

  constructor(fb: FormBuilder,
    private utilDateService:UtilDateService,
    private restService:RestService,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<CreateCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      color: 'primary',
      fontSize: [16, Validators.min(10)],
    });
    this.currentUser = this.accountService.userValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreateEmpresa(){
     this.restService.resCompaniesCreate(this.formCorporateName, this.formFantasy, this.formToken, this.countryType)
    .pipe(first())
    .subscribe(
        data => {
        alert(data.message)
        this.onNoClick();
        },
        error => {
          alert(error.error.message)
          console.log("teste  erro= "+JSON.stringify(error)+"");
        });
  
}


}
