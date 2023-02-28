import { Component, ViewChild } from '@angular/core';

export interface TransactionType {
  value: string;
  viewValue: string;
}

declare var require: any;
const data: any = require('src/assets/history.json');

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  rows: any[] = [];
  public columns = [{ name: 'Id' }, { name: 'Data' }, { name: 'Valor' }, { name: 'Tipo' }];
  public temp = [...data];
  public loadingIndicator = true;
  public reorderable = true;

  transactionType: TransactionType[] = [
    { value: '0', viewValue: 'All' },
    { value: '1', viewValue: 'Value Deposit' },
    { value: '2', viewValue: 'Monetary Transfer' },
    { value: '3', viewValue: 'Bonus' },
    { value: '4', viewValue: 'ChargeBack' },
    { value: '5', viewValue: 'Online Payment' },
    { value: '6', viewValue: 'Tax' }
  ];

  @ViewChild(HistoryComponent, { static: true }) table: HistoryComponent = Object.create(null);
  constructor() {
    this.rows = data;
    this.temp = [...data];
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
  }

  updateFilter(v: any): void {
    const val = v;
    // filter our data
    // tslint:disable-next-line - Disables all
    const temp = this.temp.filter(function (d: any) {
      // tslint:disable-next-line - Disables all
      return d.name.indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table = data;
  }

  onChange(deviceValue:any) {
   // alert(deviceValue);
    this.updateFilter(deviceValue);
}

  updateValue(event: any, cell: string, rowIndex: number): void {
    console.log('inline editing rowIndex', rowIndex);
    // // // this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}
