import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { email } from 'ngx-custom-validators/src/app/email/validator';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent {
  options: FormGroup;
  public currentUser: any;
  hide = true;



  constructor(fb: FormBuilder,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<EmailComponent>,
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

  changeEmailOnClik(email:string){
    this.accountService.changeProfileEmail(this.currentUser.id, email)
    .pipe(first())
    .subscribe(
        data => {
        //  this.alertService.success("", true);
          console.log("teste sucesso "+JSON.stringify(data));

        },
        error => {
          console.log("teste  erro= "+JSON.stringify(error)+"");
        });
  }

    
}
