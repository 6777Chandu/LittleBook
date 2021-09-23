import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AppConstants } from 'src/app/constants/app.constants';
import { ColorThemesService } from 'src/app/services/color-themes/color-themes.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  constructor(
    private colorTheme: ColorThemesService,
    private searchService: SearchService
  ) {}

  searchBoxPlaceHolder: string;
  searchQuery: string = '';

  themeColor: string;
  colorThemeSubscription: Subscription;

  ngOnInit(): void {
    this.searchBoxPlaceHolder =
      AppConstants.PAGE_SECTIONS.BLOG_LIST.SEARCH_BOX_PLACEHOLDER;

    this.colorThemeSubscription = this.colorTheme.colorTheme.subscribe(
      (data) => (this.themeColor = data)
    );
  }

  ngOnDestroy() {
    this.colorThemeSubscription.unsubscribe();
  }
}
