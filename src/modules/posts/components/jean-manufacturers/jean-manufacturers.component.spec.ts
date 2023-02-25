import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanManufacturersComponent } from './jean-manufacturers.component';

describe('JeanManufacturersComponent', () => {
  let component: JeanManufacturersComponent;
  let fixture: ComponentFixture<JeanManufacturersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeanManufacturersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeanManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
