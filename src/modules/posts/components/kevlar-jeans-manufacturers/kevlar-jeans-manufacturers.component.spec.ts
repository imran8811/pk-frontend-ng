import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KevlarJeansManufacturersComponent } from './kevlar-jeans-manufacturers.component';

describe('KevlarJeansManufacturersComponent', () => {
  let component: KevlarJeansManufacturersComponent;
  let fixture: ComponentFixture<KevlarJeansManufacturersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KevlarJeansManufacturersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KevlarJeansManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
