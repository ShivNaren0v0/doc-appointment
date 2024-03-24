import { TestBed } from '@angular/core/testing';

import { PatauthService } from './patauth.service';

describe('PatauthService', () => {
  let service: PatauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
