import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallfeedbacksComponent } from './viewallfeedbacks.component';

describe('ViewallfeedbacksComponent', () => {
  let component: ViewallfeedbacksComponent;
  let fixture: ComponentFixture<ViewallfeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallfeedbacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallfeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
