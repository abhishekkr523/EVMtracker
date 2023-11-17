import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvmTrackingComponent } from './evm-tracking.component';

describe('EvmTrackingComponent', () => {
  let component: EvmTrackingComponent;
  let fixture: ComponentFixture<EvmTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvmTrackingComponent]
    });
    fixture = TestBed.createComponent(EvmTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
