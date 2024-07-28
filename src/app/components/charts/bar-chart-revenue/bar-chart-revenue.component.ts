import { Component } from '@angular/core';
import { DashboardService } from '../../../Service/component-service/dashboard.service';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../Shared/Modules/material.module';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart-revenue',
  standalone: true,
  imports: [CommonModule,MaterialModule,BaseChartDirective],
  templateUrl: './bar-chart-revenue.component.html',
  styleUrl: './bar-chart-revenue.component.scss'
})
export class BarChartRevenueComponent {
  constructor(
    private dashboardService:DashboardService
  ){ 
    Chart.register(...registerables);

  }

  revenueData:any;
  barChartData!: ChartData<'bar'>;
  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'gray',
          stepSize: 4000 // Adjust this value to set your step size
        },
        grid: {
          color: '#d3d3d38f',
        },
        title: {
          display: true,
          text: 'Revenue',
          color: '#2d2d2d'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Month',
          font: {
            size: 14,
            family: 'EB Garamond, Arial, sans-serif'
          },
          color: '#2d2d2d',
          padding: {
            top: 4,
            bottom: 14
          }
        },
        grid: {
          display: false,
        },
       
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
      this.getBarChart();

  }


  getBarChart(){
    this.dashboardService.getMonthlyRevenueChart().subscribe((res:any)=>{
              this.revenueData=res?.data?.chart;
              this.barChartData = {
                labels: this.revenueData.labels,
                datasets: [
                  {
                    data: this.revenueData.data,
                    label: 'Monthly Revenue',
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
