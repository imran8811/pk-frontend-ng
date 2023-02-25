import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeansWholesaleComponent } from './jeans-wholesale.component';

describe('JeansWholesaleComponent', () => {
  let component: JeansWholesaleComponent;
  let fixture: ComponentFixture<JeansWholesaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeansWholesaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeansWholesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
