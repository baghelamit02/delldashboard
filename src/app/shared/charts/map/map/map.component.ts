import { Component, OnInit } from '@angular/core';
var Highcharts = require("highcharts/highmaps.js");  
import { Options } from "highcharts";  
declare var require: any
var worldMap = require("@highcharts/map-collection/custom/world-continents.geo.json"); 

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  {

  Highcharts: typeof Highcharts = Highcharts;  
  chartConstructor = "mapChart";  
  updateFlag = false;  
  chartData = [{  
      code3: "ABW",  
      z: 105  
  }, {  
      code3: "AFG",  
      z: 35530  
  }];  

  chartOptions: Options = {  
      chart: {  
          map: worldMap as any  
      },  
      title: {  
          text: ""  
      },  
      // subtitle: {  
      //     text: 'Sub title: <a href="http://code.highcharts.com/mapdata/custom/world.js"> xyzzzz</a>'  
      // },  
      exporting: {  
          enabled: true  
      },  
      credits: {  
          enabled: true  
      },  
      mapNavigation: {  
          enabled: true,  
          buttonOptions: {  
              alignTo: "spacingBox"  
          }  
      },  
      legend: {  
          enabled: true  
      },  
      colorAxis: {  
          dataClasses: [{  
              from :0,
              to: 24,  
              color: 'red'  
          }, {  
              from: 500,  
              to: 1500,  
              color: 'green'  
          }, {  
              from: 1500,  
              to: 2200,  
              color: '#00a2ad'  
          }, {  
              from: 2200,  
              to: 10000,  
              color: '#7fd0d6'  
          }],  
          type: 'linear',  
      },  
      series: [{  

          point: {  
              events: {  
                  click: (e) => {  
                      this.getDataByCountryKey(e.point['hc-key'])  
                  }  

                  // click: this.getDataByCountryKey.bind(this)    
              }  
          },  
          type: "map",  
          name: "Sales",  
          states: {  
              hover: {  
                  color: "#BADA55"  
              }  
          },  
          dataLabels: {  
              enabled: true,  
              format: "{point.name}"  
          },  
          allAreas: true,  
          data: [
            ['eu', 20],
            ['oc', 500],
            ['af', 1502],
            ['as', 3000],
            ['na', 2444],
            ['sa', 1115]
        ] 
      }]  

  };  

  onClick() {  
      let newData1 = ["eg", 555];  
      let newData2 = ["kg", 555];  
      let newData3 = ["ru", 555];  

      console.log(...(this.chartOptions.series[0] as any).data);  
      this.chartOptions = {  
          // title: {    
          // text: "updated"    
          // },    
          series: [{  
              type: "map",  
              data: [  
                  ...(this.chartOptions.series[0] as any).data,  

                  // ["eg", 555],    
                  // ["kg", 555],    
                  // ["np", 555]    
                  newData1,  
                  newData2,  
                  newData3  
              ]  
          }]  
      };  

      this.updateFlag = true;  
  }  

  getDataByCountryKey(ckey: any) {  
      console.log('CountryKey:' + ckey);  
  }  
}
