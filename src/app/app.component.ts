import { Component, OnInit } from '@angular/core';
import { SlidingOverlayService } from './services/sliding-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private slidingOverlay: SlidingOverlayService) {}
  showSlidingOverlay: boolean;

  ngOnInit() {
    // It is good to move this to a service. Use a behaviour subject to trigger opening of the modal
    //Always assign to subscripiton variable and unsubscribe it on ondestroy
    this.slidingOverlay.showSlidingOverlay.subscribe(
      (data) => (this.showSlidingOverlay = data)
    );
  }
}
