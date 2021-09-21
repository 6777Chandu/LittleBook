import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BlogListsComponent } from './components/sections/blog-lists/blog-lists.component';
import { BlogDetailsComponent } from './components/sections/blog-details/blog-details.component';
import { SidebarContainerModule } from './components/sections/sidebar-container/sidebar-container.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './components/shared/shared.module';


@NgModule({
  declarations: [AppComponent, BlogListsComponent, BlogDetailsComponent],
  imports: [
    BrowserModule,
    SidebarContainerModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
