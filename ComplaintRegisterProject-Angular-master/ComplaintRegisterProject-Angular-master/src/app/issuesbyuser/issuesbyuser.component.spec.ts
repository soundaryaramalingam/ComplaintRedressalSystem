import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesbyuserComponent } from './issuesbyuser.component';

describe('IssuesbyuserComponent', () => {
  let component: IssuesbyuserComponent;
  let fixture: ComponentFixture<IssuesbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesbyuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
