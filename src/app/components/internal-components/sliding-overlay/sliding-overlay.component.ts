import { Component, OnInit } from '@angular/core';
import { SlidingOverlayService } from 'src/app/services/sliding-overlay.service';

@Component({
  selector: 'app-sliding-overlay',
  templateUrl: './sliding-overlay.component.html',
  styleUrls: ['./sliding-overlay.component.scss'],
})
export class SlidingOverlayComponent {
  isDisplaying: boolean = true;
  constructor(private slidingOverlay: SlidingOverlayService) {}

  /**
   * @description Closes the alertBox and Resets the alertType both in AlertService
   */
  onClose() {
    this.isDisplaying = false;
    setTimeout(() => {
      this.slidingOverlay.onCloseSlidingOverlay();
    }, 500);
  }
}
