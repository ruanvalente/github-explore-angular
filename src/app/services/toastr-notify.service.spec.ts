import { TestBed } from '@angular/core/testing';

import { ToastrNotifyService } from './toastr-notify.service';

describe('ToastrNotifyService', () => {
  let service: ToastrNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastrNotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
