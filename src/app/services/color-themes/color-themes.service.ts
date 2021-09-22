import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorThemesService {
  constructor() {}

  colorTheme: BehaviorSubject<string> = new BehaviorSubject<string>('light');

  /**
   * @description Fetches colorTheme
   * @returns string with Current Color theme
   */
  fetchColorTheme(): string {
    return this.colorTheme.value;
  }

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
