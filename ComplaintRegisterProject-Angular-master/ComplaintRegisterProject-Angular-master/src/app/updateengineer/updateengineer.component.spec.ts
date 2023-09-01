import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateengineerComponent } from './updateengineer.component';

describe('UpdateengineerComponent', () => {
  let component: UpdateengineerComponent;
  let fixture: ComponentFixture<UpdateengineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateengineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateengineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
