import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { blogPosts } from 'src/app/models/app.models';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})
export class BlogItemComponent implements OnInit, OnDestroy {
  constructor(private blogPost: BlogService) {}

  blogItems: blogPosts[] = [];
  blogPostSubscription: Subscription;

  ngOnInit(): void {
    this.blogPost.fetchBlogPosts();
    this.blogPostSubscription = this.blogPost.items.subscribe(
      (data) => (this.blogItems = data)
    );
  }

  ngOnDestroy() {
    this.blogPostSubscription.unsubscribe();
  }
}
