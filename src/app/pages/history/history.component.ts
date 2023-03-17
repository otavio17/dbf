import { UtilDateService } from './../../services/util/util-date.service';
import { RestService } from './../../services/rest.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AccountService } from 'src/app/services/account.service';

export interface TransactionType {
  value: string;
  viewValue: string;
}

declare var require: any;
//const data: any = require('src/assets/history.json');

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent  implements OnInit{
  public dateInit!: Date;
  public dateFinish!: Date;
  public rows: any[] = [];
  public columnsLabel = [{ name: 'Data' }, {name:'Moeda'},{ name: 'Valor' }, { name: 'Tipo' },{name:'Status'}];
  public columns = [{ name: 'Data' }, {name:'Moeda'}, { name: 'Valor' }, { name: 'Tipo' },{name:'Status'}];
  public temp:any[] = [];
  public loadingIndicator = true;
  public reorderable = true;
  public tType:any;
  public transactionType: any[] = [];
  public transactionDare: any[] = [];

  ngOnInit(): void {
    
    this.restService.resTransactionsListUserAll()
    .pipe(first())
    .subscribe(
        data => {
        this.transactionType=  [{"id":0,"name":"All","user_transaction":1,"companie_transaction":0,"status":1,"createdAt":"2023-02-01T22:54:28.000Z","updatedAt":"2023-02-01T22:54:28.000Z"}]
        this.transactionType=  this.transactionType.concat( data.types);
        // this.alertService.success("", true);
       //  console.log("teste sucesso "+JSON.stringify(this.transactionType));
       //  console.log("teste sucesso "+JSON.stringify(data));
        this.tType = 0;
        this.listHistory(true); 
        },
        error => {
          console.log("teste  erro= "+JSON.stringify(error)+"");
          alert(error.error.message);
          if(error.error.message.includes("Token"))
          this.accountService.logout();
        });


  }




  @ViewChild(HistoryComponent, { static: true }) table: HistoryComponent = Object.create(null);
  constructor(public restService:RestService, public utilDateService:UtilDateService,
    public accountService:AccountService) {
    //this.rows = data;
    //this.temp = [...data];
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
    //this.table = data;
  }

  listHistory(isInit:boolean) {
   // alert(deviceValue);
    //this.updateFilter(deviceValue);
    let dInit = "0";
    let dFinish = "0";
    let type = 0;

      if(isInit){
        this.dateFinish=new Date();
        var d = new Date();
        d.setMonth(d.getMonth() - 1);
        this.dateInit=d;
        this.tType = 0;
    }
        dInit = this.utilDateService.dateTransform(this.dateInit, "shortDate")?.toString()+"";
        dFinish = this.utilDateService.dateTransform(this.dateFinish, "shortDate")?.toString()+"";
        type = this.tType;
 
  console.log("type = "+type)
  console.log("dInit = "+dInit)
  console.log("dFinish = "+dFinish)
    this.restService.resTransactionsUsersListMy(dInit,dFinish,type)
    .pipe(first())
    .subscribe(
        data => {
          this.rows = data.transactions;
          this.temp = [... data.transactions];
    
        //  this.alertService.success("", true);
      //console.log("teste sucesso "+JSON.stringify(this.transactionType));
      this.reordenarList(data.transactions)
         console.log("teste sucesso "+JSON.stringify(data));
          
        },
        error => {
          console.log("teste  erro= "+JSON.stringify(error)+"");
  
        });


}

reordenarList(date:any){
           this.rows =  [];
          this.temp = [];
  for (var i = 0; i < date.length; i++) {
    // Iterate over numeric indexes from 0 to 5, as everyone expects.
    console.log("-->"+date[i].value);
    var aux =  [ {
      "id": date[i].id,
      "operation": date[i].date,
      "moeda": date[i].currency,
      "valor": date[i].value,
      "status": (date[i].StatusTransactionId === 1)?"Confirmed":"Pending",
      "observations": "",
      "data": this.utilDateService.dateTransform(date[i].createdAt, "short")+"",
      "UserId": 19,
      "CompanieId": 3,
      "tipo":  this.typeTransacao(date[i].TypeTransactionId),
   }];
   this.rows =  this.rows.concat(aux);
   this.temp = this.rows;
}
}
private typeTransacao(id:bigint){
    for (var i = 0; i < this.transactionType.length; i++) {
    if(id === this.transactionType[i].id)
    return this.transactionType[i].name;
    
}
}

  updateValue(event: any, cell: string, rowIndex: number): void {
    console.log('inline editing rowIndex', rowIndex);
    // // // this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}
