import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid,
  ApexNonAxisChartSeries,
  ApexResponsive,
} from 'ng-apexcharts';
import { number } from 'ngx-custom-validators/src/app/number/validator';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import { RestService } from 'src/app/services/rest.service';

export interface VisitorChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  colors: string[];
  stroke: any;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
}

@Component({
  selector: 'app-visitor-user',
  templateUrl: './visitor-user.component.html',
  styleUrls: ['./visitor-user.component.scss'],
})

export class VisitorUserComponent implements OnInit{
  @ViewChild('visitor-chart') chart5: ChartComponent = Object.create(null);
  public VisitorChartOptions: Partial<VisitorChartOptions> | undefined;
  public myTransactions:any;
  public totalGroupedMy: any[] = [];
  public nameGroupedMy: any[] = [];
  public text_color= ['visitor-A1','visitor-A2','visitor-A3','visitor-A4']

  ngOnInit(): void {
 //  [{"Total":-19,"TypeTransactionId":5,"TypeTransaction.name":"Online Payment"}]}
 this.restService.resTransactionsUsersListGroupedMy()
 .pipe(first())
 .subscribe(
     data => {
      this.myTransactions = data.transactions;
      console.log("ListGroupedMy "+JSON.stringify(this.myTransactions));
      this.totalNameGroupedMy();
      this.exibirMapa();
      console.log("ListGroupedMy "+JSON.stringify(this.totalGroupedMy));
     },
     error => {
       console.log("teste  erro= "+JSON.stringify(error)+"");
       //alert(error.error.message);
       if(error.error.message.includes("Token"))
       this.accountService.logout();
     });
  }

  constructor(public accountService: AccountService, public restService:RestService) {
 
  }

  private totalNameGroupedMy(){
    for (var i = 0; i < this.myTransactions.length; i++) {
     console.log("teste NAME= "+this.myTransactions[i].name);
     console.log("teste NAME= "+this.myTransactions[i].Total);
     var totalGroupedMy =0;
     totalGroupedMy  = this.myTransactions[i].Total;
     this.totalGroupedMy[i] = Math.abs(totalGroupedMy);
     this.nameGroupedMy[i] = this.myTransactions[i].TypeTransactionName;

}
return "---"
}
   exibirMapa(){
    this.VisitorChartOptions = {
      series:  this.totalGroupedMy,
      chart: {
        type: 'donut',
        fontFamily: 'Poppins,sans-serif',
        height: 253,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '80px',
          },
        },
      },
      tooltip: {
        fillSeriesColor: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      legend: {
        show: false,
      },
      colors: ['#1e88e5', '#26c6da', '#745af2', '#eceff1'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    };
  }

}
