import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../Shared/Modules/material.module';
import { BaseChartDirective } from 'ng2-charts';
import { DashboardService } from '../../../Service/component-service/dashboard.service';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';


@Component({
  selector: 'app-bar-chart-category',
  standalone: true,
  imports: [CommonModule,MaterialModule,BaseChartDirective],
  templateUrl: './bar-chart-category.component.html',
  styleUrl: './bar-chart-category.component.scss'
})
export class BarChartCategoryComponent {

  constructor(
    private dashboardService:DashboardService
  ){ 
    Chart.register(...registerables);

  }
  public mbarChartLabels: string[] = [];
  public barChartLegend: boolean = false;



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
          text: 'Sales',
          color: '#2d2d2d'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Category',
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

  categoryData:any;


  ngOnInit(): void {
      this.getBarChart();

  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  getBarChart(){
    this.dashboardService.getSalesByCategoryChart().subscribe((res:any)=>{
              this.categoryData=res?.data?.chart;
              this.barChartData = {
                labels: this.categoryData.labels,
                datasets: [
                  { 
                    data: this.categoryData.data,
                    label: 'Sales by Category',
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
