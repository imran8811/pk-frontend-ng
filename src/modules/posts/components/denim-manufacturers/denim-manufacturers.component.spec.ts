import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenimManufacturersComponent } from './denim-manufacturers.component';

describe('DenimManufacturersComponent', () => {
  let component: DenimManufacturersComponent;
  let fixture: ComponentFixture<DenimManufacturersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenimManufacturersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenimManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
