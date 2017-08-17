import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BlogPostService } from './blog-post.service';

describe('BlogPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        BlogPostService,
      ],
    });
  });

  it('should be created', inject([BlogPostService], (service: BlogPostService) => {
    expect(service).toBeTruthy();
  }));
});
