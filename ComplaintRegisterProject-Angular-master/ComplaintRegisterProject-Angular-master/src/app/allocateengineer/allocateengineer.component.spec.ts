import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateengineerComponent } from './allocateengineer.component';

describe('AllocateengineerComponent', () => {
  let component: AllocateengineerComponent;
  let fixture: ComponentFixture<AllocateengineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocateengineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateengineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
