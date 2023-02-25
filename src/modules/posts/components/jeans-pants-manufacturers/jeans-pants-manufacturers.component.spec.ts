import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeansPantsManufacturersComponent } from './jeans-pants-manufacturers.component';

describe('JeansPantsManufacturersComponent', () => {
  let component: JeansPantsManufacturersComponent;
  let fixture: ComponentFixture<JeansPantsManufacturersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeansPantsManufacturersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeansPantsManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
