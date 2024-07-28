import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartTrendsComponent } from './line-chart-trends.component';

describe('LineChartTrendsComponent', () => {
  let component: LineChartTrendsComponent;
  let fixture: ComponentFixture<LineChartTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChartTrendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
