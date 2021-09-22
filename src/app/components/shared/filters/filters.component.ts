import { Component, OnInit } from '@angular/core';
import { blogPosts } from 'src/app/models/app.models';
import { ApiService } from 'src/app/services/api/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  items: blogPosts[] = [];
  itemFilters: string[] = [];
  itemFiltersHolder: string[] = [];

  ngOnInit(): void {
    this.fetchBlogPostsWithTweeks();
  }

  /**
   * Fetches BlogPosts and takes only the required filtered data (Will be replaced soon with better approach )
   */
  fetchBlogPostsWithTweeks() {
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    };

    this.apiService
      .fetchAPI(environment.HOST_BLOGS)
      .toPromise()
      .then((data) => {
        this.items = data;

        this.items.map((data) => this.itemFiltersHolder.push(data.type));
        this.itemFilters = this.itemFiltersHolder.filter(unique);
        this.itemFilters.reverse();
      })
      .catch((error) => {
        console.log('Promise rejected with errors');
      });
  }
}
