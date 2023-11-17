import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvmdialogComponent } from './evmdialog.component';

describe('EvmdialogComponent', () => {
  let component: EvmdialogComponent;
  let fixture: ComponentFixture<EvmdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvmdialogComponent]
    });
    fixture = TestBed.createComponent(EvmdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
