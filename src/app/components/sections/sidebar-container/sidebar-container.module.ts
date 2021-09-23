import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from 'src/app/components/shared/logo/logo.component';
import { FiltersComponent } from '../../shared/filters/filters.component';
import { SidebarContainerComponent } from './sidebar-container.component';
import { SidebarMenuComponent } from 'src/app/components/shared/sidebar-menu/sidebar-menu.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SidebarContainerComponent,
    LogoComponent,
    FiltersComponent,
    SidebarMenuComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [SidebarContainerComponent],
})
export class SidebarContainerModule {}
