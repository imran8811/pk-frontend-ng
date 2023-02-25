import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleJeansManufacturersComponent } from './wholesale-jeans-manufacturers.component';

describe('WholesaleJeansManufacturersComponent', () => {
  let component: WholesaleJeansManufacturersComponent;
  let fixture: ComponentFixture<WholesaleJeansManufacturersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholesaleJeansManufacturersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholesaleJeansManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
