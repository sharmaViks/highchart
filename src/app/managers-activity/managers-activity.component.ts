import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from '../data.service';

@Component({
  selector: 'app-managers-activity',
  templateUrl: './managers-activity.component.html',
  styleUrls: ['./managers-activity.component.css']
})
export class ManagersActivityComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {}
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {

      if (data[1].name == "Graph 2") {

        Highcharts.chart('container1', {
          chart: {
            height: 350,
            zoomType: 'xy'
          },
          title: {
            text: 'Managers Activity'
          },
          xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
          }],
          yAxis: [{ // Primary yAxis
            labels: {
              format: '{value}',
              style: {
                color: Highcharts.getOptions().colors[1]
              }
            },
            title: {
              text: 'Progress',
              style: {
                color: Highcharts.getOptions().colors[1]
              }
            }
          }, { // Secondary yAxis

            labels: {
              format: '{value}',
              style: {
                color: Highcharts.getOptions().colors[0]
              }
            },
            opposite: true
          }],
          tooltip: {
            shared: true
          },
          legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || // theme
              'rgba(255,255,255,0.25)'
          },
          series: [{
            name: 'Progress',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],


          }]
        });
      }
    })

  }

}
