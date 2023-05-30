import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardButtonComponent } from './dashboard-button.component';

describe('DashboardButtonComponent', () => {
  let component: DashboardButtonComponent;
  let fixture: ComponentFixture<DashboardButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardButtonComponent]
    });
    fixture = TestBed.createComponent(DashboardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
