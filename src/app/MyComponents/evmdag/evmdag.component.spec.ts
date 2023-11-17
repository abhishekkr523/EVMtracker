import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvmdagComponent } from './evmdag.component';

describe('EvmdagComponent', () => {
  let component: EvmdagComponent;
  let fixture: ComponentFixture<EvmdagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvmdagComponent]
    });
    fixture = TestBed.createComponent(EvmdagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
