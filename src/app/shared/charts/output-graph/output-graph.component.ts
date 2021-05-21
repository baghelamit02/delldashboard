import { SimpleChanges } from '@angular/core';
import { SimpleChange } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import { $ } from 'protractor';



@Component({
  selector: 'app-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.component.css']
})
export class OutputGraphComponent  //implements OnInit 
{
  
@Input()
filterType:String;
data = [1, 2, 3, 4];

chartData :Highcharts.SeriesOptionsType[];
chartDataWeek :Highcharts.SeriesOptionsType[];
chartDataMonth :Highcharts.SeriesOptionsType[];
chartDataYear :Highcharts.SeriesOptionsType[];
chartOptions: Highcharts.Options;

Highcharts: typeof Highcharts = Highcharts; // required
chartConstructor: string = 'chart'; // optional string, defaults to 'chart'

//chartCallback: Highcharts.ChartCallbackFunction = function (chart) {  } // optional function, defaults to null
updateFlag: boolean = false; // optional boolean
oneToOneFlag: boolean = true; // optional boolean, defaults to false
runOutsideAngular: boolean = false; // optional boolean, defaults to false


ngOnInit(): void {


   this.chartData = [
      {
         type: 'spline',
         name: 'Tokyo',
         data: [37000, 6999, 4000, 3000, 1000, 4000, 3333,1111, 1232, 3345, 3243, 5412]
      },
      {
         type: 'spline',
         name: 'New York',
         data: [5000, 6999, 4500, 3000, 1000, 4000, 3333,1111, 1242, 3345, 6243, 5412]
      },
      {
         type: 'spline',
         name: 'Berlin',
         data: [9000, 5999, 4000, 3050, 1000, 4000, 3333,3111, 1232, 3335, 5243, 3412]
      },
      {
         type: 'spline',
         name: 'London',
         data: [1000, 6949, 4000, 3000, 1000, 4050, 3333,1111, 6232, 3345, 3243, 5412]
      }
   ];
   
   this.chartDataWeek = [
      {
         type: 'spline',
         name: 'Tokyo',
         data: [5000, 6999, 4000, 3000, 1000, 4000, 3333,1111, 1232, 3345, 3243, 5412]
      },
      {
         type: 'spline',
         name: 'New York',
         data: [1000, 6999, 4500, 4000, 1000, 4000, 3333,1111, 1242, 3345, 6243, 5412]
      },
      {
         type: 'spline',
         name: 'Berlin',
         data: [1000, 5999, 4000, 3050, 1000, 4000, 3333,3111, 1232, 3335, 5243, 3412]
      },
      {
         type: 'spline',
         name: 'London',
         data: [1000, 6949, 4000, 3000, 6000, 4050, 3333,1111, 6232, 3345, 3243, 5412]
      }
   ];
   
   this.chartDataMonth = [
      {
         type: 'spline',
         name: 'Tokyo',
         data: [22000, 6999, 4000, 3000, 1000, 4000, 3333,1111, 1232, 3345, 3243, 5412]
      },
      {
         type: 'spline',
         name: 'New York',
         data: [1000, 6999, 4500, 4000, 1000, 4000, 3333,1111, 1242, 3345, 6243, 5412]
      },
      {
         type: 'spline',
         name: 'Berlin',
         data: [1000, 5999, 4000, 3050, 1000, 4000, 3333,3111, 1232, 3335, 5243, 3412]
      },
      {
         type: 'spline',
         name: 'London',
         data: [1000, 6949, 4000, 3000, 6000, 4050, 3333,1111, 6232, 3345, 3243, 5412]
      }
   ];

   this.chartDataYear = [
      {
         type: 'spline',
         name: 'Tokyo',
         data: [15000, 6999, 4000, 53000, 1000, 4000, 3333,1411, 1232, 7345, 3243, 5412]
      },
      {
         type: 'spline',
         name: 'New York',
         data: [11000, 6999, 34500, 4000, 1000, 44000, 3333,3111, 1242, 3345, 8243, 5412]
      },
      {
         type: 'spline',
         name: 'Berlin',
         data: [12000, 5999, 4000, 23050, 1000, 4000, 3333,3111, 1232, 6335, 5243, 3412]
      },
      {
         type: 'spline',
         name: 'London',
         data: [81000, 6949, 4000, 3000, 6000, 4050, 3333,6111, 6232, 3345, 3243, 5412]
      }
   ];

   this.chartOptions = { 
      chart: {
                 type: "spline",
                 
            },
            title: {
                       text: "Heat Map"
                    },
      xAxis:{
            categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
               "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
         },
         yAxis: {          
            title:{
               text:"Sales"
            } 
         },
      series: this.chartData as Highcharts.SeriesOptionsType[]
   
   }; // required

}

callLater()
{
setTimeout(() => {
  // $('.modal-content').css({ 'width': 100 + 'px' });     
}, 3000);

}

 ngOnChanges(changes: SimpleChanges) {

    for (let propName in changes) {
      
      let chng = changes[propName];
      let cur  = chng.currentValue;
      let prev = chng.previousValue;
    
    if(cur == 'Today'){
      
      this.chartData = this.chartDataMonth;
      this.chartOptions.series = this.chartDataMonth as Highcharts.SeriesOptionsType[];
      this.updateFlag = true;
    
   }
   else if( cur == 'Week')
   {
     
      this.chartData = this.chartDataWeek;
      this.chartOptions.series = this.chartDataWeek as Highcharts.SeriesOptionsType[];
      this.updateFlag = true;
   
   }
   else
   {
      this.chartData = this.chartDataYear;
      this.chartOptions.series = this.chartDataYear as Highcharts.SeriesOptionsType[];
      this.updateFlag = true;

   }
  }
   
 }
 

};
