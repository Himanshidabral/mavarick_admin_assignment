import { Component } from '@angular/core';
import { BarChartCategoryComponent } from "../bar-chart-category/bar-chart-category.component";
import { BarChartRevenueComponent } from "../bar-chart-revenue/bar-chart-revenue.component";
import { LineChartTrendsComponent } from "../line-chart-trends/line-chart-trends.component";
import { MaterialModule } from '../../Shared/Modules/material.module';

@Component({
  selector: 'app-dashboard-chart',
  standalone: true,
  imports: [BarChartCategoryComponent, BarChartRevenueComponent, LineChartTrendsComponent,MaterialModule],
  templateUrl: './dashboard-chart.component.html',
  styleUrl: './dashboard-chart.component.scss'
})
export class DashboardChartComponent {

}
