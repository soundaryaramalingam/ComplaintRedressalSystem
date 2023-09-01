import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallraisedcomplaintsformanagerComponent } from './viewallraisedcomplaintsformanager.component';

describe('ViewallraisedcomplaintsformanagerComponent', () => {
  let component: ViewallraisedcomplaintsformanagerComponent;
  let fixture: ComponentFixture<ViewallraisedcomplaintsformanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallraisedcomplaintsformanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallraisedcomplaintsformanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
