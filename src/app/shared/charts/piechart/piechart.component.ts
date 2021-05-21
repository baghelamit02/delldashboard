import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  highcharts = Highcharts;
  chartOptions = {   
     chart : {
        plotBorderWidth: null,
        plotShadow: false
     },
     title : {
        text: 'Dell Market Share in 2020'   
     },
     tooltip : {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     },
     plotOptions : {
        pie: {
           allowPointSelect: true,
           cursor: 'pointer',
     
           dataLabels: {
              enabled: false           
           },
     
           showInLegend: true
        }
     },
     series : [{
        type: 'pie',
        name: 'Browser share',
        data: [
           ['Monitors',   45.0],
           ['Softwares',       26.8],
           {
              name: 'PC & Tablet Accessories',
              y: 12.8,
              sliced: true,
              selected: true
           },
           ['Laptop',    8.5],
           ['Speakers',     6.2],
           ['Carrying Cases',      0.7]
        ]
     }]
  };
}
