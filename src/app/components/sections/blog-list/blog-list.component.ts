import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OverlayTypes } from 'src/app/constants/app.constants';
import { ColorThemesService } from 'src/app/services/color-themes/color-themes.service';
import { SlidingOverlayService } from 'src/app/services/sliding-overlay/sliding-overlay.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
// DONE: Blogslist or BlogLists ?
export class BlogListComponent implements OnInit, OnDestroy {
  constructor(
    private slidingOverlay: SlidingOverlayService,
    private colorTheme: ColorThemesService
  ) {}
  themeColor: string;
  colorThemeSubscription: Subscription;

  ngOnInit(): void {
    this.colorThemeSubscription = this.colorTheme.colorTheme.subscribe(
      (data) => (this.themeColor = data)
    );
  }

  /**
   * @description this method reaches service and triggers it via its name and open the overlay
   */
  onAddBlogPost():void {
    this.slidingOverlay.onTrigger(OverlayTypes.addBlogPost);
    this.slidingOverlay.onOpenSlidingOverlay();
  }

  ngOnDestroy():void {
    this.colorThemeSubscription.unsubscribe();
  }
}
