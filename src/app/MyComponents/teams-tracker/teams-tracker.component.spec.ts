import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsTrackerComponent } from './teams-tracker.component';

describe('TeamsTrackerComponent', () => {
  let component: TeamsTrackerComponent;
  let fixture: ComponentFixture<TeamsTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsTrackerComponent]
    });
    fixture = TestBed.createComponent(TeamsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
