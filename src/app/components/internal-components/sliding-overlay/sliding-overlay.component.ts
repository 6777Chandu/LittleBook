import { Component, OnInit } from '@angular/core';
import { ColorThemesService } from 'src/app/services/color-themes/color-themes.service';
import { SlidingOverlayService } from 'src/app/services/sliding-overlay.service';

@Component({
  selector: 'app-sliding-overlay',
  templateUrl: './sliding-overlay.component.html',
  styleUrls: ['./sliding-overlay.component.scss'],
})
export class SlidingOverlayComponent implements OnInit{
  isDisplaying: boolean = true;
  constructor(private slidingOverlay: SlidingOverlayService, private colorTheme:ColorThemesService) {}

  themeColor:string;
  ngOnInit(): void {
    this.colorTheme.colorTheme.subscribe(data => this.themeColor = data )
  }

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
