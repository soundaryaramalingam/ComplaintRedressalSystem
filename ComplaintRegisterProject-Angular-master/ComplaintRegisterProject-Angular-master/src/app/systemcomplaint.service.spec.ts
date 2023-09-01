import { TestBed } from '@angular/core/testing';

import { SystemcomplaintService } from './systemcomplaint.service';

describe('SystemcomplaintService', () => {
  let service: SystemcomplaintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemcomplaintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
