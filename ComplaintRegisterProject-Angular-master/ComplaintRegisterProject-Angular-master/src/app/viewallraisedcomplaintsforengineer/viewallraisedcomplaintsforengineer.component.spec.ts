import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallraisedcomplaintsforengineerComponent } from './viewallraisedcomplaintsforengineer.component';

describe('ViewallraisedcomplaintsforengineerComponent', () => {
  let component: ViewallraisedcomplaintsforengineerComponent;
  let fixture: ComponentFixture<ViewallraisedcomplaintsforengineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallraisedcomplaintsforengineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallraisedcomplaintsforengineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
