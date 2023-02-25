import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeansManufacturingCostComponent } from './jeans-manufacturing-cost.component';

describe('JeansManufacturingCostComponent', () => {
  let component: JeansManufacturingCostComponent;
  let fixture: ComponentFixture<JeansManufacturingCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeansManufacturingCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeansManufacturingCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
