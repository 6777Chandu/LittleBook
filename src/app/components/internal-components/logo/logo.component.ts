import { Component, OnInit } from '@angular/core';
import { ColorThemesService } from 'src/app/services/color-themes/color-themes.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(private colorTheme:ColorThemesService) { }
  themeColor:string;

  ngOnInit(): void {
    this.colorTheme.colorTheme.subscribe(data => this.themeColor = data)
  }

}
