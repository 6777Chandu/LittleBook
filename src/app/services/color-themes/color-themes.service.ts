import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorThemesService {
  constructor() {}

  colorTheme = new BehaviorSubject<string>('light');

  fetchColorTheme() {
    return this.colorTheme.value;
  }

  onChangeToDark() {
    this.colorTheme.next('dark');
  }

  onChangeToLight() {
    this.colorTheme.next('light');
  }
}
