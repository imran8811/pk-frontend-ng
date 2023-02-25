import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleWomenJeansComponent } from './wholesale-women-jeans.component';

describe('WholesaleWomenJeansComponent', () => {
  let component: WholesaleWomenJeansComponent;
  let fixture: ComponentFixture<WholesaleWomenJeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholesaleWomenJeansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholesaleWomenJeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
