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
    this.slidingOverlay.showSlidingOverlay.subscribe(
      (data) => (this.showSlidingOverlay = data)
    );
  }
}
