import { FormfieldComponent } from './../formfield/formfield.component';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AccountService } from 'src/app/services/account.service';
import { PhoneComponent } from './phone/phone.component';
import { EmailComponent } from './email/email.component';
import { SecurityComponent } from './security/security.component';

@Component({
  selector: 'app-profile-dialog-phone',
  template: `<mat-card>
  <mat-card-content>
    <mat-card-title>Alterar número de telefone</mat-card-title>

    <div class="label-margem-form">
    
      <mat-form-field >
        <input  value="" matInput placeholder="Número de telefone" autocomplete="off" />
      </mat-form-field>
      </div>
      <button mat-raised-button color="warn" matStepperNext>Next</button>
      </mat-card-content>
      </mat-card>`,
})
export class DialogPhoneComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogPhoneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  public options: FormGroup;
  public currentUser: any;
  public email2:any; 
  public hintColor:any;
  hide = true;

  constructor(public fb: FormBuilder, public accountService:AccountService, public dialog: MatDialog) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      color: 'primary',
      fontSize: [16, Validators.min(10)],
    });
    this.currentUser = this.accountService.userValue;
    this.email2= localStorage.getItem('email');
    this.hintColor = '#ff0000'
  }
  public config: PerfectScrollbarConfigInterface = {};
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage(): any {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  getFontSize(): any {
    return Math.max(10, this.options.value.fontSize);
  }

  openDialogPhone(): void {
    const dialogRef = this.dialog.open(PhoneComponent, {
      width: '550px', height:'350px',
      data: { name: "", animal: "" },backdropClass: 'backdropBackground' 
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  openDialogEmail(): void {
    const dialogRef = this.dialog.open(EmailComponent, {
      width: '550px', height:'350px',
      data: { name: "", animal: "" },backdropClass: 'backdropBackground' 
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  openDialogSecurity(): void {
    const dialogRef = this.dialog.open(SecurityComponent, {
      width: '500px', height:'350px',
      data: { name: "", animal: "" },backdropClass: 'backdropBackground' 
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
