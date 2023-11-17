import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatanVotersComponent } from './patan-voters.component';

describe('PatanVotersComponent', () => {
  let component: PatanVotersComponent;
  let fixture: ComponentFixture<PatanVotersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatanVotersComponent]
    });
    fixture = TestBed.createComponent(PatanVotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
