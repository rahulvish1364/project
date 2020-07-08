import { TestBed } from '@angular/core/testing';

import { ProjectServerService } from './project-server.service';

describe('ProjectServerService', () => {
  let service: ProjectServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
