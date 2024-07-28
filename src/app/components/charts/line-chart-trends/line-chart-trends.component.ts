import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { MaterialModule } from '../../Shared/Modules/material.module';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../../Service/component-service/dashboard.service';
import { Chart, ChartConfiguration, ChartOptions, registerables } from 'chart.js';

@Component({
  selector: 'app-line-chart-trends',
  standalone: true,
  imports: [CommonModule,MaterialModule,BaseChartDirective],
  templateUrl: './line-chart-trends.component.html',
  styleUrl: './line-chart-trends.component.scss'
})
export class LineChartTrendsComponent {
  constructor(
    private dashboardService:DashboardService
  ){ 
    Chart.register(...registerables);

  }

  lineChartData:any;

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Year',
          padding: {
            top: 4,
            bottom: 14
          }
        },
        
        grid: {
          display: false,
          color: '#444444'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Sales',
          
          padding: {
            top: 10,
            bottom: 0
          }
        },
        ticks: {

          stepSize: 5000
        },
        grid: {
          color: '#d3d3d38f',

        }
      }
    }
  };


  public chartClicked(e: any): void {
    console.log(e);
  }
  
  public chartHovered(e: any): void {
    console.log(e);
  }
  
  
  
    ngOnInit(): void {
        this.getLineChart();
  
    }
  
  
    getLineChart(){
      this.dashboardService.getYearlySalesChart().subscribe((res:any)=>{
                this.lineChartData=res?.data?.chart;
                this.lineChartData=               {
                  labels: this.lineChartData.labels,
                  datasets: [
                    {
                      data: this.lineChartData.data,
                      label: 'Yearly Sales Trends',
                      backgroundColor: ["rgba(141, 173, 172, 1)"],
                      borderColor: ["rgba(67,87,86)"    ],
                          borderWidth: 1
                    }
                  ]
                };
  

            
          
                
      },(err:any)=>{
  
      })
    }
  

}
