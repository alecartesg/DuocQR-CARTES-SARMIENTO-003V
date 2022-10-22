import { TestBed } from '@angular/core/testing';

import { IngresoPGuard } from './ingreso-p.guard';

describe('IngresoPGuard', () => {
  let guard: IngresoPGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresoPGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
