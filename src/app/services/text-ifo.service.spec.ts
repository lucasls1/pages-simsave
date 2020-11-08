import { TestBed } from '@angular/core/testing';

import { TextIfoService } from './text-ifo.service';

describe('TextIfoService', () => {
  let service: TextIfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextIfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
