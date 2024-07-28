import { Injectable } from '@angular/core';
import { HttpsharedService } from '../httpshared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private httpService: HttpsharedService

  ) { }

  getSalesByCategoryChart(): Observable<any> {
    return this.httpService.getCall(`/chart/sales-by-category`);
  };
  getMonthlyRevenueChart(): Observable<any> {
    return this.httpService.getCall(`/chart/monthly-revenue`);
  };
  getYearlySalesChart(): Observable<any> {
    return this.httpService.getCall(`/chart/yearly-sales`);
  };

}
