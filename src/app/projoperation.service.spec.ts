import { TestBed } from '@angular/core/testing';

import { ProjoperationService } from './projoperation.service';

describe('ProjoperationService', () => {
  let service: ProjoperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjoperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
