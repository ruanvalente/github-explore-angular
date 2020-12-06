import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastrNotifyService {
  constructor(private toast: ToastrService) {}
  showSucess(message: string): void {
    this.toast.toastrConfig.progressBar = true;
    this.toast.toastrConfig.closeButton = true;
    this.toast.success(message);
  }

  showError(message: string): void {
    this.toast.toastrConfig.progressBar = true;
    this.toast.toastrConfig.closeButton = true;
    this.toast.error(message);
  }
}
