import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdInputComponent } from './fd-input.component';

describe('FdInputComponent', () => {
  let component: FdInputComponent;
  let fixture: ComponentFixture<FdInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
