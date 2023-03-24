import { first } from 'rxjs/operators';
import { RestService } from 'src/app/services/rest.service';
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
import { AccountService } from 'src/app/services/account.service';

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
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss'],
})

export class HomeUserComponent implements OnInit{
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public inexpu2chartOptions: Partial<inexpu2chartOptions>;
  public currentUser: any;
  public countMy:any;
  
  
  ngOnInit(): void {
        
                                                                             

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
