import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleDenimJeansSuppliersComponent } from './wholesale-denim-jeans-suppliers';

describe('WholesaleDenimJeansSuppliersComponent', () => {
  let component: WholesaleDenimJeansSuppliersComponent;
  let fixture: ComponentFixture<WholesaleDenimJeansSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholesaleDenimJeansSuppliersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholesaleDenimJeansSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
