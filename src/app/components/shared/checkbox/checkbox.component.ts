import { Component, OnInit } from '@angular/core';
import { BlogPosts } from 'src/app/models/app.models';
import { ApiService } from 'src/app/services/api/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  //This should have been a dumb component so that we can re use the component for anything other than filters.
  //Add Input for label/value/checked/name
  //Add output for capturing click/change of checked value 
  items: BlogPosts[] = [];
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
