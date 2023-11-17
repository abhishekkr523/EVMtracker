import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvmmanoharthanaComponent } from './evmmanoharthana.component';

describe('EvmmanoharthanaComponent', () => {
  let component: EvmmanoharthanaComponent;
  let fixture: ComponentFixture<EvmmanoharthanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvmmanoharthanaComponent]
    });
    fixture = TestBed.createComponent(EvmmanoharthanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
