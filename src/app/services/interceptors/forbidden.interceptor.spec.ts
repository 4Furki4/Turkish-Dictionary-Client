import { TestBed } from '@angular/core/testing';

import { ForbiddenInterceptor } from './forbidden.interceptor';

describe('ForbiddenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ForbiddenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ForbiddenInterceptor = TestBed.inject(ForbiddenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
