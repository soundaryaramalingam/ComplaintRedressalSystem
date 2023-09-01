import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcomplaintsforuserComponent } from './viewallcomplaintsforuser.component';

describe('ViewallcomplaintsforuserComponent', () => {
  let component: ViewallcomplaintsforuserComponent;
  let fixture: ComponentFixture<ViewallcomplaintsforuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallcomplaintsforuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallcomplaintsforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
