import { Component, OnInit } from '@angular/core';
import { ColorThemesService } from 'src/app/services/color-themes/color-themes.service';
import { SlidingOverlayService } from 'src/app/services/sliding-overlay.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent {
  constructor(private colorTheme: ColorThemesService, private slidingOverlay:SlidingOverlayService) {}
  colorThemeTitle: string = 'Dark Mode';

  onDarkMode() {
    this.colorThemeTitle = 'Light Mode';
    this.colorTheme.onChangeToDark();
  }

  onLightMode() {
    this.colorThemeTitle = 'Dark Mode';
    this.colorTheme.onChangeToLight();
  }

  onViewMembers(){
    this.slidingOverlay.onOpenSlidingOverlay();
  }
}
