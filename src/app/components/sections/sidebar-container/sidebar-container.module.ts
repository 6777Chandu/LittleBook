import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../internal-components/logo/logo.component';
import { FiltersComponent } from '../../internal-components/filters/filters.component';
import { SidebarContainerComponent } from './sidebar-container.component';
import { SidebarMenuComponent } from '../../internal-components/sidebar-menu/sidebar-menu.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    SidebarContainerComponent,
    LogoComponent,
    FiltersComponent,
    SidebarMenuComponent,
  ],
  imports: [CommonModule],
  exports: [SidebarContainerComponent],
})
export class SidebarContainerModule {}
