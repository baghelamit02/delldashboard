import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stackedcolumn',
  templateUrl: './stackedcolumn.component.html',
  styleUrls: ['./stackedcolumn.component.css']
})
export class StackedcolumnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  highcharts = Highcharts;
   chartOptions = {   
      chart : {
         type: 'column'
      },
      title : {
         text: 'Total Delivery by Continent'   
      },
      xAxis : {
         categories: ['Monitors', 'Speakers', 'Laptop', 'Software', 'PC & Tablet Accessories']
      },
      yAxis : {
         allowDecimals: false,
         min: 0,
         title: {
            text: 'Number of Units'
         }     
      },
      plotOptions : {
         column: {
            stacking: 'normal'        
         }
      },
      credits : {
         enabled: false
      },
      series : [
         {
            name: 'Asia',
            data: [5, 3, 4, 7, 2],
            stack: 'Asia'
         }, 
         {
            name: 'Europe',
            data: [3, 4, 4, 2, 5],
            stack: 'Europe'
         }, 
         {
            name: 'Australia',
            data: [2, 5, 6, 2, 1],
            stack: 'Australia'
         }, 
         {
            name: 'Russia',
            data: [3, 0, 4, 4, 3],
            stack: 'Russia'
         }
      ]
   };

}
