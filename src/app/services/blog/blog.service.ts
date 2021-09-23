import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { BlogPosts } from 'src/app/models/app.models';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private apiService: ApiService) {}
  blogList: Subject<BlogPosts[]> = new Subject<BlogPosts[]>();
  blogDetailPost: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  /**
   * @description It fetches all BlogPosts from the API
   */
  fetchBlogPosts() {
    this.apiService
      .fetchAPI(environment.HOST_BLOGS)
      .toPromise()
      .then((data) => {
        this.setBlogPosts(data);
      })
      .catch((error) => {
        console.error('BlogService: fetchBlogPosts - error', error);
      });
  }

  /**
   * @description sets BlogPost to blogList Subject
   * @param data Takes data from API
   */
  setBlogPosts(data: BlogPosts[]) {
    this.blogList.next(data);
  }

  /**
   * Sets the item for Blog Detail
   */
  setBlogPostDetail(id: number) {
    this.blogDetailPost.next(id);
  }
}
