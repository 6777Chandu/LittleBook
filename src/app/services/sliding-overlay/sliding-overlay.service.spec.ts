import { TestBed } from '@angular/core/testing';

import { SlidingOverlayService } from './sliding-overlay.service';

describe('SlidingOverlayService', () => {
  let service: SlidingOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlidingOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
