import { TestBed } from '@angular/core/testing';

import { Story1sService } from './story1s.service';

describe('Story1sService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Story1sService = TestBed.get(Story1sService);
    expect(service).toBeTruthy();
  });
});
