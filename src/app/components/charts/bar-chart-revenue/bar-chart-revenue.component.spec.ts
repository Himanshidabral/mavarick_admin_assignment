import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartRevenueComponent } from './bar-chart-revenue.component';

describe('BarChartRevenueComponent', () => {
  let component: BarChartRevenueComponent;
  let fixture: ComponentFixture<BarChartRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChartRevenueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
