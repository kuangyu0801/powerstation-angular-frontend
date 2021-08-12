import { TestBed } from '@angular/core/testing';

import { LinkQueryService } from './link-query.service';

describe('LinkQueryService', () => {
  let service: LinkQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
