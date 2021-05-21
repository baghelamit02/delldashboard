import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HostListener, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);

@Component({
  selector: 'app-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./drilldown.component.css']
})
export class DrilldownComponent implements OnInit {

  @Input()
  filterType:String;
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

  constructor() { }

  ngOnInit(): void {

    this.chartData = [
      {
          name: "Continents",
          colorByPoint: true,
          data: [
              {
                  name: "Antarctica",
                  y: 12.74,
                  drilldown: "Antarctica"
              },
              {
                  name: "Australia",
                  y: 72.57,
                  drilldown: "Australia"
              },
              {
                  name: "North America",
                  y: 7.23,
                  drilldown: "North America"
              },
              {
                  name: "Europe",
                  y: 5.58,
                  drilldown: "Europe"
              },
              {
                  name: "Africa",
                  y: 4.02,
                  drilldown: "Africa"
              },
              {
                  name: "Asia",
                  y: 1.92,
                  drilldown: "Asia"
              }
          ]
      }
  ];
   
  this.chartDrillDownData =[
    {
        name: "Antarctica",
        id: "Antarctica",
        data: [
            [
                "65.0",
                0.1
            ],
            [
                "64.0",
                1.3
            ],
            [
                "63.0",
                53.02
            ],
            [
                "62.0",
                1.4
            ],
            [
                "61.0",
                0.88
            ],
            [
                "60.0",
                0.56
            ],
            [
                "59.0",
                0.45
            ],
            [
                "58.0",
                0.49
            ],
            [
                "57.0",
                0.32
            ],
            [
                "56.0",
                0.29
            ],
            [
                "55.0",
                0.79
            ],
            [
                "54.0",
                0.18
            ],
            [
                "51.0",
                0.13
            ],
            [
                "49.0",
                2.16
            ],
            [
                "48.0",
                0.13
            ],
            [
                "47.0",
                0.11
            ],
            [
                "43.0",
                0.17
            ],
            [
                "29.0",
                0.26
            ]
        ]
    },
    {
        name: "Australia",
        id: "Australia",
        data: [
            [
                "58.0",
                1.02
            ],
            [
                "57.0",
                7.36
            ],
            [
                "56.0",
                0.35
            ],
            [
                "55.0",
                0.11
            ],
            [
                "54.0",
                0.1
            ],
            [
                "52.0",
                0.95
            ],
            [
                "51.0",
                0.15
            ],
            [
                "50.0",
                0.1
            ],
            [
                "48.0",
                0.31
            ],
            [
                "47.0",
                0.12
            ]
        ]
    },
    {
        name: "North America",
        id: "North America",
        data: [
            [
                "11.0",
                6.2
            ],
            [
                "10.0",
                0.29
            ],
            [
                "9.0",
                0.27
            ],
            [
                "8.0",
                0.47
            ]
        ]
    },
    {
        name: "Europe",
        id: "Europe",
        data: [
            [
                "11.0",
                3.39
            ],
            [
                "10.1",
                0.96
            ],
            [
                "10.0",
                0.36
            ],
            [
                "9.1",
                0.54
            ],
            [
                "9.0",
                0.13
            ],
            [
                "5.1",
                0.2
            ]
        ]
    },
    {
        name: "Africa",
        id: "Africa",
        data: [
            [
                "16",
                2.6
            ],
            [
                "15",
                0.92
            ],
            [
                "14",
                0.4
            ],
            [
                "13",
                0.1
            ]
        ]
    },
    {
        name: "Asia",
        id: "Asia",
        data: [
            [
                "50.0",
                0.96
            ],
            [
                "49.0",
                0.82
            ],
            [
                "12.1",
                0.14
            ]
        ]
    }
];

this.chartDataToday = [
  {
      name: "Continents",
      colorByPoint: true,
      data: [
          {
              name: "Antarctica",
              y: 22.74,
              drilldown: "Antarctica"
          },
          {
              name: "Australia",
              y: 52.57,
              drilldown: "Australia"
          },
          {
              name: "North America",
              y: 17.23,
              drilldown: "North America"
          },
          {
              name: "Europe",
              y: 11.58,
              drilldown: "Europe"
          },
          {
              name: "Africa",
              y: 24.02,
              drilldown: "Africa"
          },
          {
              name: "Asia",
              y:21.92,
              drilldown: "Asia"
          }
      ]
  }
];

this.chartDataWeek = [
  {
      name: "Continents",
      colorByPoint: true,
      data: [
          {
              name: "Antarctica",
              y: 32.74,
              drilldown: "Antarctica"
          },
          {
              name: "Australia",
              y: 12.57,
              drilldown: "Australia"
          },
          {
              name: "North America",
              y: 27.23,
              drilldown: "North America"
          },
          {
              name: "Europe",
              y: 11.58,
              drilldown: "Europe"
          },
          {
              name: "Africa",
              y: 34.02,
              drilldown: "Africa"
          },
          {
              name: "Asia",
              y:21.92,
              drilldown: "Asia"
          }
      ]
  }
];

this.chartDataYear = [
  {
      name: "Continents",
      colorByPoint: true,
      data: [
          {
              name: "Antarctica",
              y: 32.74,
              drilldown: "Antarctica"
          },
          {
              name: "Australia",
              y: 32.57,
              drilldown: "Australia"
          },
          {
              name: "North America",
              y: 27.23,
              drilldown: "North America"
          },
          {
              name: "Europe",
              y: 21.58,
              drilldown: "Europe"
          },
          {
              name: "Africa",
              y: 14.02,
              drilldown: "Africa"
          },
          {
              name: "Asia",
              y:11.92,
              drilldown: "Asia"
          }
      ]
  }
];

    this.chartOptions = { 
      chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    // subtitle: {
    //     text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    // },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent market share'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
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

  ngOnChanges(changes: SimpleChanges) {

    for (let propName in changes) {
      
      let chng = changes[propName];
      let cur  = chng.currentValue;
      let prev = chng.previousValue;
    
    if(cur == 'Today'){
      
      this.chartData = this.chartData;
      this.chartOptions.series = this.chartDataToday as Highcharts.SeriesOptionsType[];
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

}
