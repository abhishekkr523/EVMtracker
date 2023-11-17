import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvmjhalawarComponent } from './evmjhalawar.component';

describe('EvmjhalawarComponent', () => {
  let component: EvmjhalawarComponent;
  let fixture: ComponentFixture<EvmjhalawarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvmjhalawarComponent]
    });
    fixture = TestBed.createComponent(EvmjhalawarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
