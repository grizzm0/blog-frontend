import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostModule } from '../../blog-post/blog-post.module';
import { BlogPostListItemComponent } from './blog-post-list-item.component';

describe('BlogPostListItemComponent', () => {
  let component: BlogPostListItemComponent;
  let fixture: ComponentFixture<BlogPostListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // Internal modules
        BlogPostModule,
      ],
      declarations: [
        BlogPostListItemComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
