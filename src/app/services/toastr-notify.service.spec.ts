import { ToastrNotifyService } from './toastr-notify.service';
import { TestBed } from '@angular/core/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('ToastrNotifyService', () => {
  let toastrNotifyService: ToastrNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [ToastrService],
    });

    toastrNotifyService = TestBed.inject(ToastrNotifyService);
  });

  it('should be instanced', () => {
    expect(toastrNotifyService).toBeTruthy();
  });
});
