import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogPosts } from 'src/app/models/app.models';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit, OnDestroy {
  constructor(private blogService: BlogService) {}
  name: string;
  imgURL: string;
  description: string;

  blogListSubscription: Subscription;
  blogDetailPostSubscription: Subscription;

  ngOnInit(): void {
    this.blogListSubscription = this.blogService.blogList.subscribe(
      (blogList) => {
        this.blogDetailPostSubscription =
          this.blogService.blogDetailPost.subscribe((id) => {
            this.name = blogList[id].title;
            this.imgURL = blogList[id].photo;
            this.description = blogList[id].details;
          });
      }
    );
  }
 

  ngOnDestroy() {
    this.blogListSubscription.unsubscribe();
    this.blogDetailPostSubscription.unsubscribe();
  }
}
