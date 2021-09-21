import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidingOverlayComponent } from '../internal-components/sliding-overlay/sliding-overlay.component';



@NgModule({
  declarations: [SlidingOverlayComponent],
  imports: [CommonModule],
  exports: [SlidingOverlayComponent],
})
export class SharedModule {}
