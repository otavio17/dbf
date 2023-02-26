import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent {
  options: FormGroup;
  public currentUser: any;
  hide = true;



  constructor(fb: FormBuilder,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<PhoneComponent>,
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


}
