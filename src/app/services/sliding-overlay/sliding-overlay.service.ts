import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { OverlayTypes } from 'src/app/constants/app.constants';
// DONE: Place this inside a folder similar to other services
@Injectable({
  providedIn: 'root',
})
export class SlidingOverlayService {
  constructor() {}

  showSlidingOverlay: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  slidingOverlayType: BehaviorSubject<string> = new BehaviorSubject<string>('');

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

  /**
   * @description it sets OverlayType based on the param
   * @param name it accepts a string by which sets OverlayType value
   */
  onTrigger(name: string) {
    if (name === OverlayTypes.members) {
      this.slidingOverlayType.next(OverlayTypes.members);
    } else {
      this.slidingOverlayType.next(OverlayTypes.addBlogPost);
    }
  }
}
