
import { RestService } from 'src/app/services/rest.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountService } from 'src/app/services/account.service';
import { first } from 'rxjs/operators';
import { UtilDateService } from 'src/app/services/util/util-date.service';


@Component({
  selector: 'app-credit-card-deposit',
  templateUrl: './credit-card-deposit.component.html',
  styleUrls: ['./credit-card-deposit.component.scss'],
})
export class CreditCardDepositComponent implements OnInit {options: FormGroup;
  public moeda: any[] = [];
  public mes: any[] = [];
  public ano: any[] = [];
  public moedaId:any;
  public mesId:any;
  public anoId:any;
  hide = true;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      color: 'primary',
      fontSize: [16, Validators.min(10)],
    });
  }
  ngOnInit(): void {
    this.moeda =  [{"id": 0, "name": "USDC"},
                   {"id": 1, "name": "BRL"},
                   {"id": 2, "name": "EURO"},
                   {"id": 3, "name": "MXN"}];

    this.mes =    [{"id": 0, "name": "01"},{"id": 1, "name": "02"},{"id": 2, "name": "03"},
                   {"id": 3, "name": "04"},{"id": 4, "name": "04"},{"id": 5, "name": "05"},
                   {"id": 6, "name": "06"},{"id": 7, "name": "07"},{"id": 8, "name": "08"},
                   {"id": 9, "name": "09"},{"id": 10, "name": "10"},{"id": 11, "name": "11"},{"id": 12, "name": "12"}];
   
    this.ano =    [{"id": 0, "name": "2023"},{"id": 1, "name": "2024"},{"id": 2, "name": "2025"},
                   {"id": 3, "name": "2025"},{"id": 4, "name": "2026"},{"id": 5, "name": "2027"},
                   {"id": 6, "name": "2028"},{"id": 7, "name": "2029"},{"id": 8, "name": "2030"},
                   {"id": 9, "name": "2031"},{"id": 10, "name": "2032"},{"id": 11, "name": "2033"},{"id": 12, "name": "12"}];

     this.moedaId = 0;
       
  }

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

  listMoeda(a:any){
  
  }

  listMes(a:any){
  
  }

  listAno(a:any){
  
  }
}
