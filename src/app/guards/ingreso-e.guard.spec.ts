import { TestBed } from '@angular/core/testing';

import { IngresoEGuard } from './ingreso-e.guard';

describe('IngresoEGuard', () => {
  let guard: IngresoEGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresoEGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
