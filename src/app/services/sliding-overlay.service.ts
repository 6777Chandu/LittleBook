import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// Place this inside a folder similar to other services
@Injectable({
  providedIn: 'root',
})
export class SlidingOverlayService {
  constructor() {}

  showSlidingOverlay = new BehaviorSubject<boolean>(false);

  /**
   * @description Sets showSlidingOverlay to true, which displays the SlidingOverlay Box
   */
  onOpenSlidingOverlay() {
    this.showSlidingOverlay.next(true);
  }

  /**
   * @description Sets showSlidingOverlay to false, which closes the SlidingOverlay Box
   */
  onCloseSlidingOverlay() {
    this.showSlidingOverlay.next(false);
  }
}
