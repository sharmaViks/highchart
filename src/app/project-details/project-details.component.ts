import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from '../data.service';

@Component({
   selector: 'app-project-details',
   templateUrl: './project-details.component.html',
   styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

   highcharts = Highcharts;
   chartOptions = {}
   constructor(private dataService: DataService) { }

   ngOnInit() {
      this.dataService.getData().subscribe(data => {
         if (data[0].name == "Graph 1") {
            Highcharts.chart('container',
               {
                  chart: {
                     height: 300,
                     type: 'areaspline'
                  },
                  title: {
                     text: 'Project Activity'
                  },
                  subtitle: {
                     style: {
                        position: 'absolute',
                        right: '0px',
                        bottom: '10px'
                     }
                  },
                  legend: {
                     layout: 'vertical',
                     align: 'left',
                     verticalAlign: 'top',
                     x: -150,
                     y: 100,
                     floating: true,
                     borderWidth: 1,

                     backgroundColor:
                        '#FFFFFF'
                  },
                  xAxis: {
                     type: 'datetime',
                     labels: {
                        formatter: function () {
                           return Highcharts.dateFormat('%A %d %b', this.value);
                        }
                     }
                  },
                  yAxis: {

                     labels: {
                        enabled: false
                     }
                  },
                  tooltip: {
                     shared: true, valueSuffix: ' units',
                     crosshairs: {
                        color: 'green',
                        dashStyle: 'solid'
                     }

                  },
                  plotOptions: {
                     area: {
                        fillOpacity: 0.5
                     },
                     series: {
                        pointStart: Date.UTC(2019, 5, 3),
                        pointInterval: 24 * 3600 * 1000, // one day,
                        dataLabels: {
                           enabled: true,
                           borderRadius: 5,
                           formatter: function () {
                              return "<span style='color:white;font-size:12px;text-align:center'>" + Highcharts.numberFormat(this.y, 3) + "$" + "</span>";
                           },
                           backgroundColor: '#47476b',
                           borderWidth: 1,
                           borderColor: '#AAA',
                           y: -6
                        }
                     }
                  },
                  credits: {
                     enabled: false
                  },
                  series: [
                     {
                        name: 'John',
                        data: data[0].data,
                        type: undefined,
                        color: '#1ac6ff'
                     },
                     {
                        name: 'Jane',
                        data: [1, 6, 2, 7, 5, 7, 10],
                        type: undefined,
                        color: '#ff0066'
                     }
                  ],
               })
         }
      })
   }


}
