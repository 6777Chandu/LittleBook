import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConstants } from 'src/app/constants/app.constants';
import { ColorThemesService } from 'src/app/services/color-themes/color-themes.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  constructor(private colorTheme: ColorThemesService) {}

  searchBoxPlaceHolder: string;
  addBlogPostButton: string;
  themeColor: string;
  colorThemeSubscription: Subscription;
  @Output() addBlogPostEvent: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    this.searchBoxPlaceHolder =
      AppConstants.PAGE_SECTIONS.BLOG_LIST.SEARCH_BOX_PLACEHOLDER;
    this.addBlogPostButton =
      AppConstants.PAGE_SECTIONS.BLOG_LIST.ADD_NEW_POST_BUTTON;
    this.colorThemeSubscription = this.colorTheme.colorTheme.subscribe(
      (data) => (this.themeColor = data)
    );
  }

  /**
   * This method emits an event to the parent component on its click
   */
  onAddBlogPost() {
    this.addBlogPostEvent.emit();
  }

  ngOnDestroy() {
    this.colorThemeSubscription.unsubscribe();
  }
}
