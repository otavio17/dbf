import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import { RestService } from 'src/app/services/rest.service';
import { UtilDateService } from 'src/app/services/util/util-date.service';
import { CreateCompanyComponent } from './create-company/create-company.component';

@Component({
  selector: 'app-register-companies-list',
  templateUrl: './register-companies-list.component.html',
  styleUrls: ['./register-companies-list.component.scss']
})
export class RegisterCompaniesListComponent implements OnInit {
  public dateInit!: Date;
  public dateFinish!: Date;
  public rows: any[] = [];
  public columns = [{ name: 'Id' }, { name: 'Corporate' }, { name: 'Fantasy' },{name:'Token'},{name:'Country'}];
  public temp:any[] = [];
  public loadingIndicator = true;
  public reorderable = true;
  public tType:any;
  public country: any[] = [];

  ngOnInit(): void {
    this.restService.resCountryListAll()
    .pipe(first())
    .subscribe(
        data => {
        this.country= data.country;
        this.tType = 1;
        this.listCompanies(); 
        },
        error => {
          console.log("teste  erro= "+JSON.stringify(error)+"");
          //alert(error.error.message);
          if(error.error.message.includes("Token"))
          this.accountService.logout();
        });
  }

  @ViewChild(RegisterCompaniesListComponent, { static: true }) table: RegisterCompaniesListComponent = Object.create(null);
  constructor(public restService:RestService, public dialog: MatDialog, public utilDateService:UtilDateService,
    public accountService:AccountService) {
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
    if(!isInit){
        dInit = this.utilDateService.dateTransform(this.dateInit, "shortDate")?.toString()+"";
        dFinish = this.utilDateService.dateTransform(this.dateFinish, "shortDate")?.toString()+"";
        type = this.tType;
      }
  
  console.log("type = "+this.tType)
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

listCompanies() {
 console.log("listCompanies")
   this.restService.resCompaniesListMy()
   .pipe(first())
   .subscribe(
       data => {
         this.rows = data.companies;
         this.temp = [... data.companies];
         this.reordenarList(data.companies)
         console.log("data.companies "+JSON.stringify(data));
       },
       error => {
         console.log("data.companies  erro= "+JSON.stringify(error)+"");
 
       });


}


reordenarList(date:any){
           this.rows =  [];
          this.temp = [];
  for (var i = 0; i < date.length; i++) {
    // Iterate over numeric indexes from 0 to 5, as everyone expects.
    console.log("-->"+date[i].value);
    var aux =  [ {
      "id":  date[i].id,
      "corporate": date[i].corporate_name,
      "fantasy": date[i].fantasy,
      "token": date[i].token_integration,
      "country":  this.typeCountry(date[i].CountryId)
   }];
   this.rows =  this.rows.concat(aux);
   this.temp = this.rows;
}
}
private typeCountry(id:bigint){
    for (var i = 0; i < this.country.length; i++) {
    if(id === this.country[i].id)
    return this.country[i].name;
    
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

  openCreateCompany(){
    const dialogRef = this.dialog.open(CreateCompanyComponent, {
      width: '550px', height:'480px',
      data: { name: "", animal: "" },backdropClass: 'backdropBackground' 
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.listCompanies(); 
    });
  }

}
