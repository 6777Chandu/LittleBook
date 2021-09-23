import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidingOverlayComponent } from './sliding-overlay/sliding-overlay.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MembersComponent } from './members/members.component';
import { AddBlogPostComponent } from './add-blog-post/add-blog-post.component';
import { BlogItemComponent } from './blog-item/blog-item/blog-item.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SearchPipe } from 'src/app/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';

// DONE: Generally, we place the re-used components in shared folder and tag to this module.
// DONE: We can avoid names like internal-components and place them in shared folder.
@NgModule({
  declarations: [
    SlidingOverlayComponent,
    SearchBarComponent,
    SearchBarComponent,
    MembersComponent,
    AddBlogPostComponent,
    BlogItemComponent,
    CheckboxComponent,
    SearchPipe,
  ],
  imports: [CommonModule,FormsModule],
  exports: [
    SlidingOverlayComponent,
    SearchBarComponent,
    BlogItemComponent,
    CheckboxComponent,
    SearchPipe,
  ],
})
export class SharedModule {}
