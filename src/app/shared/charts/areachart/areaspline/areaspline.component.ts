import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-areaspline',
  templateUrl: './areaspline.component.html',
  styleUrls: ['./areaspline.component.css']
})
export class AreasplineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  highcharts = Highcharts;
  chartOptions = {   
     chart: {
       type: 'areaspline'
     },
     title: {
       text: 'Average Sales Consumption'
     },
     subtitle : {
        style: {
           position: 'absolute',
           right: '0px',
           bottom: '10px'
        }
     },
     legend : {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: -150,
        y: 100,
        floating: true,
        borderWidth: 1,
       
        backgroundColor: (           
             '#FFFFFF')
     },
     xAxis:{
        categories: ['Monday','Tuesday','Wednesday','Thursday',
           'Friday','Saturday','Sunday'] 
     },
     yAxis : {
        title: {
           text: 'Number of units'
        }
     },
     tooltip : {
        shared: true, valueSuffix: ' units'
     },
     plotOptions : {
        area: {
           fillOpacity: 0.5 
        }
     },
     credits:{
       enabled: false
     },
     series: [
        {
           name: 'John',
           data: [3, 4, 3, 5, 4, 10, 12]
        }, 
        {
           name: 'Jane',
           data: [1, 3, 4, 3, 3, 5, 4]
        }
     ]
  };

}
