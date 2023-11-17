import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardTracComponent } from './admin-dashboard-trac.component';

describe('AdminDashboardTracComponent', () => {
  let component: AdminDashboardTracComponent;
  let fixture: ComponentFixture<AdminDashboardTracComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDashboardTracComponent]
    });
    fixture = TestBed.createComponent(AdminDashboardTracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
