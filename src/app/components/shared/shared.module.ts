import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidingOverlayComponent } from '../internal-components/sliding-overlay/sliding-overlay.component';


// Generally, we place the re-used components in shared folder and tag to this module.
//  We can avoid names like internal-components and place them in shared folder.
@NgModule({
  declarations: [SlidingOverlayComponent],
  imports: [CommonModule],
  exports: [SlidingOverlayComponent],
})
export class SharedModule {}
