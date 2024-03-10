import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdInput2Component } from './fd-input2.component';

describe('FdInput2Component', () => {
  let component: FdInput2Component;
  let fixture: ComponentFixture<FdInput2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdInput2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdInput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
