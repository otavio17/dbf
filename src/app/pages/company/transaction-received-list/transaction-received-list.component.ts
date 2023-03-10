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
  public columnsLabel = [{ name: 'Data' },{name:'Operacao'},{name:'Moeda'},{ name: 'Valor' },{ name: 'Usuario' },{name:'Transacao'}];
  public columns =      [{ name: 'Data' },{name:'Operacao'},{name:'Moeda'},{ name: 'Valor' },{ name: 'Usuario' },{name:'Transacao'}];
  public temp:any[] = [];
  public loadingIndicator = true;
  public reorderable = true;
  public companieId:any;
  public tType:any;
  public companie: any[] = [];
  public transactionType: any[] = [];
  public transactionDare: any[] = [];

  ngOnInit(): void {
    this.restService.resTransactionsListCompanieAll()
    .pipe(first())
    .subscribe(
        data => {
        console.log("teste   data.types= "+ data.types);
        this.companie= [{"id": 0, "name": "All", "user_transaction": 0, "companie_transaction": 1,
          "status": 1,  "createdAt": "",  "updatedAt": ""}]
        this.companie=  this.companie.concat( data.types);
        this.listTransactionList();
        },
        error => {
          console.log("teste  erro= "+JSON.stringify(error)+"");
        });


  }

listTransactionList(){
  this.restService.resTransactionsListUserAll()
  .pipe(first())
  .subscribe(
      data => {
      this.transactionType=  [{"id":0,"name":"All","user_transaction":1,"companie_transaction":0,"status":1,"createdAt":"2023-02-01T22:54:28.000Z","updatedAt":"2023-02-01T22:54:28.000Z"}]
      this.transactionType=  this.transactionType.concat( data.types);
      this.listCompanies(true);
      },
      error => {
        console.log("teste  erro= "+JSON.stringify(error)+"");
      });
    }

  @ViewChild(TransactionReceivedListComponent, { static: true }) table: TransactionReceivedListComponent = Object.create(null);
  constructor(public restService:RestService, public utilDateService:UtilDateService) {
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
    return "---"
}
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
