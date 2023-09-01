import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallengineersComponent } from './viewallengineers.component';

describe('ViewallengineersComponent', () => {
  let component: ViewallengineersComponent;
  let fixture: ComponentFixture<ViewallengineersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallengineersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallengineersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
