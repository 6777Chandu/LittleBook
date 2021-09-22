import { Component, OnInit } from '@angular/core';
import { ColorTheme, OverlayTypes } from 'src/app/constants/app.constants';
import { ColorThemesService } from 'src/app/services/color-themes/color-themes.service';
import { SlidingOverlayService } from 'src/app/services/sliding-overlay/sliding-overlay.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent {
  constructor(
    private colorTheme: ColorThemesService,
    private slidingOverlay: SlidingOverlayService
  ) {}
  colorThemeTitle: string = ColorTheme.dark;
  darkThemeTitle: string = ColorTheme.dark;

  /**
   * @description on Click changed to Dark Theme using Service
   */
  onDarkMode() {
    this.colorThemeTitle = ColorTheme.light;
    this.colorTheme.onChangeToDark();
  }

  /**
   * @description on Click changed to Light Theme using Service
   */
  onLightMode() {
    this.colorThemeTitle = ColorTheme.dark;
    this.colorTheme.onChangeToLight();
  }

  /**
   * @description Triggers Service and opens overlay using SlidingOverlay Service
   */
  onViewMembers(): void {
    this.slidingOverlay.onTrigger(OverlayTypes.members);
    this.slidingOverlay.onOpenSlidingOverlay();
  }
}
