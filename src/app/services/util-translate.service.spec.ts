import { TestBed } from '@angular/core/testing';

import { UtilTranslateService } from './util-translate.service';

describe('UtilTranslateService', () => {
  let service: UtilTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
