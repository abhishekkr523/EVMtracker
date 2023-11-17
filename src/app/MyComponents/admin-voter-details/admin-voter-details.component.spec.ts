import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVoterDetailsComponent } from './admin-voter-details.component';

describe('AdminVoterDetailsComponent', () => {
  let component: AdminVoterDetailsComponent;
  let fixture: ComponentFixture<AdminVoterDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVoterDetailsComponent]
    });
    fixture = TestBed.createComponent(AdminVoterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
