import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColorThemesService } from 'src/app/services/color-themes/color-themes.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit, OnDestroy {
  constructor(private colorTheme: ColorThemesService) {}
  themeColor: string;
  colorThemeSubscripition: Subscription;

  ngOnInit(): void {
    this.colorThemeSubscripition = this.colorTheme.colorTheme.subscribe(
      (data) => {
        // Use Enum for theme
        this.themeColor = data === 'dark' ? 'logo_dark' : 'logo-light';
      }
    );
  }

  ngOnDestroy() {
    this.colorThemeSubscripition.unsubscribe();
  }
}
