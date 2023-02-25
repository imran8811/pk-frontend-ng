import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeansManufacturersComponent } from './jeans-manufacturers.component';

describe('JeansManufacturersComponent', () => {
  let component: JeansManufacturersComponent;
  let fixture: ComponentFixture<JeansManufacturersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeansManufacturersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeansManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
