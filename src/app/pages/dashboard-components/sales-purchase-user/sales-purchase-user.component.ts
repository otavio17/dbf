import { Component, ViewChild, OnInit } from '@angular/core';

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
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import { RestService } from 'src/app/services/rest.service';

// tslint:disable-next-line - Disables all
export interface inexpu2chartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
}

@Component({
  selector: 'app-sales-purchase-user',
  templateUrl: './sales-purchase-user.component.html',
  styleUrls: ['./sales-purchase-user.component.scss'],
})

export class SalesPurchaseUserComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public inexpu2chartOptions: Partial<inexpu2chartOptions>;
  public currentUser: any;
  public countMy:any;
  public listSumMy:any;
  public totalCountMy=0;
  public totalListSumMy=0;

  ngOnInit(): void {
    this.restService.resTransactionsUsersListCountMy()
    .pipe(first())
    .subscribe(
        data => {
         console.log("UsersListCountMy "+JSON.stringify(data));
         this.countMy = data.transactions[0].Total;
         console.log("UsersListCountMy countMy "+this.countMy);
        },
        error => {
          console.log("teste  erro= "+JSON.stringify(error)+"");
          alert(error.error.message);
          if(error.error.message.includes("Token"))
          this.accountService.logout();
        });

        this.restService.resTransactionsUsersListSumMy()
        .pipe(first())
        .subscribe(
            data => {
              this.listSumMy =data.transactions[0];
              this.totalListSumMy = this.listSumMy.Total;
              this.totalListSumMy =  Math.abs(this.totalListSumMy);
             console.log("ListSumMy "+JSON.stringify(data));
            },
            error => {
              console.log("teste  erro= "+JSON.stringify(error)+"");
              alert(error.error.message);
              if(error.error.message.includes("Token"))
              this.accountService.logout();
            });
  }

  constructor(public accountService: AccountService, public restService:RestService) {
    this.currentUser = this.accountService.userValue;
    this.inexpu2chartOptions = {
      series: [
        {
          name: '',
          data: [1.1, 1.4, 1.1, 0.9, 1.9, 1, 0.3, 1.1],
        },
      ],
      chart: {
        type: 'bar',
        fontFamily: 'Poppins,sans-serif',
        height: 90,
        sparkline: {
          enabled: true,
        },
      },
      grid: {
        borderColor: 'rgba(0,0,0,.2)',
        strokeDashArray: 3,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '60%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },

      legend: {
        show: false,
      },
      fill: {
        colors: ['rgba(255, 255, 255, 0.5)'],
        opacity: 1,
      },
      tooltip: {
        theme: 'light',
        fillSeriesColor: false,
        marker: {
          show: true,
          fillColors: ['#fff'],
        },
        x: {
          show: false,
        },
      },
    };
  }
}
