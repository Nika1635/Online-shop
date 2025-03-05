import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ifloggedGuard } from './iflogged.guard';

describe('ifloggedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ifloggedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
