import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import  More from 'highcharts/highcharts-more';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);

@Component({
  selector: 'app-ipiechart',
  templateUrl: './ipiechart.component.html',
  styleUrls: ['./ipiechart.component.css']
})
export class IpiechartComponent implements OnInit {

  @ViewChild("container", { read: ElementRef }) container: ElementRef;
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options;
  chartData : any[];
  chartDataToday : any[];
  chartDataWeek : any[];
  chartDataYear : any[];
  chartDrillDownData : any[];
  chartDrillDownDataToday : any[];

    //chartCallback: Highcharts.ChartCallbackFunction = function (chart) {  } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false  

  constructor() {
  }
  ngOnInit() {
this.chartData = [{
  name: 'Products',
  data: [
    {
      name: 'Monitors',
      y: 88.19,
      drilldown: 'windows-versions'
    },
    ['Softwares', 9.22],
    ['Laptop', 1.58],
    ['Speakers', 1.01]
  ]
}];



this.chartDrillDownData =[{
  name: 'Monitors',
  id: 'windows-versions',
  data: [
    ['14 inch', 55.03],
    ['17 inch', 15.83],
    ['12 inch', 3.59],
    ['10 inch', 7.56],
    ['16 inch', 6.18]
  ]}];

    this.chartOptions = { 
        // Created pie chart using Highchart
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 45
          }
        },
        title: {
          text: ''
        },
        // subtitle: {
        //   text: '3D donut in Highcharts'
        // },
        plotOptions: {
          pie: {
            innerSize: 100,
            depth: 45
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: this.chartData,
        drilldown: {
          series: this.chartDrillDownData
          
        }
   
   }; // required

  }
}