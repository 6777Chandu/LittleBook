import { Injectable } from '@angular/core';
import { appendFile } from 'fs';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// Themes are generally for entire style of the app. ThemeService would be an apt name
export class ColorThemesService {
  constructor() {}
  //Take default from CONSTANTS/Enum
  colorTheme: BehaviorSubject<string> = new BehaviorSubject<string>('light');

  /**
   * @description Fetches colorTheme
   * @returns string with Current Color theme
   */
  fetchColorTheme(): string {
    return this.colorTheme.value;
  }
  //Do we need separate functions, can we just toggleTheme ? a simple ternary operator?
  /**
   * @description: Changes the ColorTheme to Dark
   */
  onChangeToDark(): void {
    this.colorTheme.next('dark');
  }
  /**
   * @description: Changes the ColorTheme to Light
   */
  onChangeToLight(): void {
    this.colorTheme.next('light');
  }
}
