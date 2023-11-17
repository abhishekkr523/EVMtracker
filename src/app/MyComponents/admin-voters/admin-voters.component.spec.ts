import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVotersComponent } from './admin-voters.component';

describe('AdminVotersComponent', () => {
  let component: AdminVotersComponent;
  let fixture: ComponentFixture<AdminVotersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVotersComponent]
    });
    fixture = TestBed.createComponent(AdminVotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
