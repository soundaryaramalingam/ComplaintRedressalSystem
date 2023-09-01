import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcomplaintsComponent } from './viewallcomplaints.component';

describe('ViewallcomplaintsComponent', () => {
  let component: ViewallcomplaintsComponent;
  let fixture: ComponentFixture<ViewallcomplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallcomplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
