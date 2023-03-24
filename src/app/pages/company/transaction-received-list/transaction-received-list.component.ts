import { AccountService } from './../../../services/account.service';
import { messages } from './../../../apps/chat/chat-data';
import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import { RestService } from 'src/app/services/rest.service';
import { UtilDateService } from 'src/app/services/util/util-date.service';

@Component({
  selector: 'app-transaction-received-list',
  templateUrl: './transaction-received-list.component.html',
  styleUrls: ['./transaction-received-list.component.scss']
})
export class TransactionReceivedListComponent  implements OnInit{
  public dateInit!: Date;
  public dateFinish!: Date;
  public rows: any[] = [];

  public columnsLabel = [{ name: 'Data' },{ name: 'Empresa' },{name:'Operacao'},{name:'Moeda'},{ name: 'Valor' },{ name: 'Usuario' },{name:'Transacao'}];
  public columns =      [{ name: 'Data' },{ name: 'Empresa' },{name:'Operacao'},{name:'Moeda'},{ name: 'Valor' },{ name: 'Usuario' },{name:'Transacao'}];
  public temp:any[] = [];
  public loadingIndicator = true;
  public reorderable = true;
  public companieId:any;
  public tType:any;
  public companie: any[] = [];
  public transactionType: any[] = [];
  public transactionDare: any[] = [];

  ngOnInit(): void {
    this.restService.resListCompanieAll()
    .pipe(first())
    .subscribe(
        data => {
        console.log("resListCompanieAll = "+JSON.stringify(data));
        this.companie= [{"id": 0, "fantasy": "All"}]
        this.companie=  this.companie.concat( data.companies);
        this.listTransactionList();
        },
        error => {
          
          console.log("teste  erro= "+JSON.stringify(error)+"");
           //alert(error.error.message);
          if(error.error.message.includes("Token"))
          this.accountService.logout();

        });


  }

listTransactionList(){
  this.restService.resTransactionsListCompanieAll()
  .pipe(first())
  .subscribe(
      data => {
      this.transactionType=  [{"id":0,"name":"All"}]
      this.transactionType=  this.transactionType.concat( data.types);
      console.log("transactionType = "+JSON.stringify(this.transactionType));
      this.listCompanies(true);
      },
      error => {
        console.log("teste  erro= "+JSON.stringify(error)+"");
      });
    }

  @ViewChild(TransactionReceivedListComponent, { static: true }) table: TransactionReceivedListComponent = Object.create(null);
  constructor(public restService:RestService, public utilDateService:UtilDateService,
    public accountService:AccountService ) {
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

  listCompanies(isInit:boolean) {
    let dInit = "0";
    let dFinish = "0";
    let type = 0;
    
    if(isInit){
        this.dateFinish=new Date();
        var d = new Date();
        d.setMonth(d.getMonth() - 1);
        this.dateInit=d;
        this.companieId =0;
    }

      dInit = this.utilDateService.dateTransform(this.dateInit, "shortDate")?.toString()+"";
      dFinish = this.utilDateService.dateTransform(this.dateFinish, "shortDate")?.toString()+"";
      type = this.companieId;
  
  console.log("type = "+this.companieId)
    this.restService.resTransactionsCompaniesListMy(dInit,dFinish,type)
    .pipe(first())
    .subscribe(
        data => {
          console.log("teste sucesso "+JSON.stringify(data));
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
      "operacao": date[i].operation,
      "currency": date[i].currency,
      "moeda": date[i].currency,
      "valor": date[i].value,
      "empresa": this.typeCompanie(date[i].CompanieId),
      "usuario":  date[i].UserId,
      "data": this.utilDateService.dateTransform(date[i].createdAt, "short")+"",
      "transacao":  this.typeTransacao(date[i].TypeTransactionId),
   }];
   [{ name: 'Usuário' },{name:'Tipo de Transação'}];
 
   this.rows =  this.rows.concat(aux);
   this.temp = this.rows;
}
}
private typeTransacao(id:bigint){
    for (var i = 0; i < this.transactionType.length; i++) {
      console.log("teste NAME= "+this.transactionType[i].name);
    if(id === this.transactionType[i].id){
      
    return this.transactionType[i].name;
    }
    
}
return "---"
}

private typeCompanie(id:bigint){
  for (var i = 0; i < this.companie.length; i++) {
    console.log("teste companie NAME= "+this.companie[i].fantasy);
  if(id === this.companie[i].id){
  return this.companie[i].fantasy;
  }
  
}
return "---"
}
  updateValue(event: any, cell: string, rowIndex: number): void {
    console.log('inline editing rowIndex', rowIndex);
    // // // this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

  onDateInit(event:any): void{
    var a  = event;
    alert("Init"+a);
  }

  onDateFinish(event:any){
    var a2  = event;
    alert("Finish"+a2);
  }

}
