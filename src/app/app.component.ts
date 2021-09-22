import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SlidingOverlayService } from './services/sliding-overlay/sliding-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private slidingOverlay: SlidingOverlayService) {}
  showSlidingOverlay: boolean;
  slidingOverlaySubscripition: Subscription;

  ngOnInit() {
    // DONE: It is good to move this to a service. Use a behaviour subject to trigger opening of the modal;
    //DONE: Always assign to subscripiton variable and unsubscribe it on ondestroy
    this.slidingOverlaySubscripition =
      this.slidingOverlay.showSlidingOverlay.subscribe(
        (data) => (this.showSlidingOverlay = data)
      );
  }

  ngOnDestroy() {
    this.slidingOverlaySubscripition.unsubscribe();
  }
}
