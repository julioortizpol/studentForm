import { TestBed } from '@angular/core/testing';

import { ChipsStateService } from './chips-state.service';

describe('ChipsStateService', () => {
  let service: ChipsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChipsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
