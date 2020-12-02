import { TestBed } from '@angular/core/testing';

import { StoragedService } from './storaged.service';

describe('StoragedService', () => {
  let service: StoragedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoragedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
