import { TestBed } from '@angular/core/testing';

import { PostKvService } from './post-kv.service';

describe('PostKvService', () => {
  let service: PostKvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostKvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
