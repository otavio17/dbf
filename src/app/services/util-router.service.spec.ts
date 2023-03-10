import { TestBed } from '@angular/core/testing';

import { UtilRouterService } from './util-router.service';

describe('UtilRouterService', () => {
  let service: UtilRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
