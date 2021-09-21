import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ColorThemesService } from 'src/app/services/color-themes/color-themes.service';


@Component({
  selector: 'app-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss'],
})
export class SidebarContainerComponent implements OnInit {
  constructor(private apiService: ApiService, private colorTheme:ColorThemesService) {}
  items = [];
  themeColor:string;
  ngOnInit(): void {
    this.colorTheme.colorTheme.subscribe(data => this.themeColor = data )
  }
}
