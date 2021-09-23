import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BlogListComponent } from './components/sections/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/sections/blog-details/blog-details.component';
import { SidebarContainerModule } from './components/sections/sidebar-container/sidebar-container.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './components/shared/shared.module';



@NgModule({
  declarations: [AppComponent, BlogListComponent, BlogDetailsComponent],
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
