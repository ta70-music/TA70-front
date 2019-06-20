import { TestBed } from '@angular/core/testing';

import { HomeCarouselService } from './home-carousel.service';

describe('HomeCarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeCarouselService = TestBed.get(HomeCarouselService);
    expect(service).toBeTruthy();
  });
});
