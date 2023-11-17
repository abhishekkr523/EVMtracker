import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvmkhanpurComponent } from './evmkhanpur.component';

describe('EvmkhanpurComponent', () => {
  let component: EvmkhanpurComponent;
  let fixture: ComponentFixture<EvmkhanpurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvmkhanpurComponent]
    });
    fixture = TestBed.createComponent(EvmkhanpurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
