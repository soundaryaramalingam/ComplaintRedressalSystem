import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallmanagersComponent } from './viewallmanagers.component';

describe('ViewallmanagersComponent', () => {
  let component: ViewallmanagersComponent;
  let fixture: ComponentFixture<ViewallmanagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallmanagersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallmanagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
