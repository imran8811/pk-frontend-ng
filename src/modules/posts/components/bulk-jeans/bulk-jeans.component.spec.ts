import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkJeansComponent } from './bulk-jeans.component';

describe('BulkJeansComponent', () => {
  let component: BulkJeansComponent;
  let fixture: ComponentFixture<BulkJeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkJeansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkJeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
