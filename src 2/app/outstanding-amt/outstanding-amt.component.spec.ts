import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingAmtComponent } from './outstanding-amt.component';

describe('OutstandingAmtComponent', () => {
  let component: OutstandingAmtComponent;
  let fixture: ComponentFixture<OutstandingAmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstandingAmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstandingAmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
