import { TestBed } from '@angular/core/testing';

import { HomeContentService } from './home-content.service';

describe('HomeContentService', () => {
  let service: HomeContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
