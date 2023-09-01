import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveproblembyengineerComponent } from './solveproblembyengineer.component';

describe('SolveproblembyengineerComponent', () => {
  let component: SolveproblembyengineerComponent;
  let fixture: ComponentFixture<SolveproblembyengineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolveproblembyengineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolveproblembyengineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
