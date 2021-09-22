import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { blogPosts } from 'src/app/models/app.models';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private apiService: ApiService) {}
  items:Subject<blogPosts[]> = new Subject<blogPosts[]>();

  /**
   * @description It fetches all BlogPosts from the API
   */
  fetchBlogPosts() {
    this.apiService
      .fetchAPI(environment.HOST_BLOGS)
      .toPromise()
      .then((data) => {
        this.items.next(data);
        console.log(data);
      })
      .catch(() => {
        console.log('Promise rejected with errors');
      });
  }
}
