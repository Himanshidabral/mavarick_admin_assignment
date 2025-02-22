import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartCategoryComponent } from './bar-chart-category.component';

describe('BarChartCategoryComponent', () => {
  let component: BarChartCategoryComponent;
  let fixture: ComponentFixture<BarChartCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChartCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
