import { TestBed } from '@angular/core/testing';

import { WordRequestService } from './word-request.service';

describe('WordRequestService', () => {
  let service: WordRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
