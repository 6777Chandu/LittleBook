import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OverlayTypes } from 'src/app/constants/app.constants';
import { ColorThemesService } from 'src/app/services/color-themes/color-themes.service';
import { SlidingOverlayService } from 'src/app/services/sliding-overlay/sliding-overlay.service';

@Component({
  selector: 'app-sliding-overlay',
  templateUrl: './sliding-overlay.component.html',
  styleUrls: ['./sliding-overlay.component.scss'],
})
export class SlidingOverlayComponent implements OnInit, OnDestroy {
  isDisplaying: boolean = true;
  overlayType: string;
  colorThemeSubscription: Subscription;
  slidingOverlaySubscription: Subscription;
  members: string = OverlayTypes.members;
  addBlogPost: string = OverlayTypes.addBlogPost;

  constructor(
    private slidingOverlay: SlidingOverlayService,
    private colorTheme: ColorThemesService
  ) {}

  themeColor: string;
  ngOnInit(): void {
    this.colorThemeSubscription = this.colorTheme.colorTheme.subscribe(
      (data) => (this.themeColor = data)
    );
    this.slidingOverlaySubscription =
      this.slidingOverlay.slidingOverlayType.subscribe(
        (data) => (this.overlayType = data)
      );
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

  ngOnDestroy() {
    this.colorThemeSubscription.unsubscribe();
    this.slidingOverlaySubscription.unsubscribe();
  }
}
