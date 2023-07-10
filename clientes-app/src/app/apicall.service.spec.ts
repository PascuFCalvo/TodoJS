import { TestBed } from '@angular/core/testing';

import { ApicallService } from './apicall/apicall.service';

describe('ApicallService', () => {
  let service: ApicallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
