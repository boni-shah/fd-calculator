import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdHomeComponent } from './fd-home.component';

describe('FdHomeComponent', () => {
  let component: FdHomeComponent;
  let fixture: ComponentFixture<FdHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
