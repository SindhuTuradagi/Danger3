import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingTableComponent } from './outstanding-table.component';

describe('OutstandingTableComponent', () => {
  let component: OutstandingTableComponent;
  let fixture: ComponentFixture<OutstandingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstandingTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstandingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
