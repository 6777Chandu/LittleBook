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
  //Lets name it blogs or bloglist? to make it more easy to deduce what the content is
  items:Subject<blogPosts[]> = new Subject<blogPosts[]>();

  /**
   * @description It fetches all BlogPosts from the API
   */
  fetchBlogPosts() {
    this.apiService
      .fetchAPI(environment.HOST_BLOGS)
      .toPromise()
      .then((data) => {
        //This can be moved to a function setBlogPosts. This way any other component/function can trigger change in blogslist
        this.items.next(data);
        console.log(data);
      })
      .catch((error) => {
        console.log('Promise rejected with errors');
        //Use console.error , always console the error so that we can trace the reason for error.
        //It would be nice to append Component/Service & function name like below
        // console.error('BlogService: fetchBlogPosts - error',error);
      });
  }
}
