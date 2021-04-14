import { TestBed } from '@angular/core/testing';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';

import { ToastrNotifyService } from './toastr-notify.service';

describe('ToastrNotifyService', () => {
  const messagers = {
    error: 'Mensagem de error',
    sucess: 'Mensagem de sucesso',
  };
  let toastrNotifyService: ToastrNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), BrowserTestingModule],
      providers: [ToastrService],
    });

    toastrNotifyService = TestBed.inject(ToastrNotifyService);
  });

  it('should be instanced', () => {
    expect(toastrNotifyService).toBeTruthy();
  });

  it('should be a sucess message', () => {
    expect(toastrNotifyService.showSucess(messagers.sucess)).toBe();
  });

  it('should be a error message', () => {
    expect(toastrNotifyService.showError(messagers.error)).toBe();
  });
});
