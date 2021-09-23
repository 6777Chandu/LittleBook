import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { ColorThemesService } from 'src/app/services/color-themes/color-themes.service';

@Component({
  selector: 'app-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss'],
})
export class SidebarContainerComponent implements OnInit, OnDestroy {
  constructor(private colorTheme: ColorThemesService) {}

  themeColor: string;
  colorThemeSubscription: Subscription;

  ngOnInit(): void {
    this.colorThemeSubscription = this.colorTheme.colorTheme.subscribe(
      (data) => (this.themeColor = data)
    );
  }

  ngOnDestroy() {
    this.colorThemeSubscription.unsubscribe();
  }
}
