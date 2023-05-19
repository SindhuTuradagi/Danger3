import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPmtComponent } from './total-pmt.component';

describe('TotalPmtComponent', () => {
  let component: TotalPmtComponent;
  let fixture: ComponentFixture<TotalPmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalPmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
