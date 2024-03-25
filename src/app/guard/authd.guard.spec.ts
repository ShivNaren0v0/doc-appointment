import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authdGuard } from './authd.guard';

describe('authdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
