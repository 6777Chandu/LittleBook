import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogPosts } from 'src/app/models/app.models';
import { BlogService } from 'src/app/services/blog/blog.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})
export class BlogItemComponent implements OnInit, OnDestroy {
  constructor(
    private blogPost: BlogService,
    private searchService: SearchService
  ) {}
  id: number = 0;
  blogItems: BlogPosts[] = [];
  searchName: string = '';
  blogPostSubscription: Subscription;

  ngOnInit(): void {
    this.blogPost.fetchBlogPosts();
    this.blogPostSubscription = this.blogPost.blogList.subscribe(
      (data) => (this.blogItems = data)
    );

    this.searchService.searchName.subscribe((d) => console.log(d));
  }

  onBlogPost(idx: number): void {
    this.blogPost.setBlogPostDetail(idx);
    this.id = idx;
  }

  ngOnDestroy() {
    this.blogPostSubscription.unsubscribe();
  }
}
