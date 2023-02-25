import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleJeansBulkComponent } from './wholesale-jeans-bulk.component';

describe('WholesaleJeansBulkComponent', () => {
  let component: WholesaleJeansBulkComponent;
  let fixture: ComponentFixture<WholesaleJeansBulkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholesaleJeansBulkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholesaleJeansBulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
