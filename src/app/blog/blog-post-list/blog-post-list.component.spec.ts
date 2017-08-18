import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BlogPostModule } from '../blog-post/blog-post.module';
import { BlogPostListComponent } from './blog-post-list.component';
import { BlogPostListItemComponent } from './blog-post-list-item/blog-post-list-item.component';
import { MarkdownModule } from '../../markdown/markdown.module';

describe('BlogPostListComponent', () => {
  let component: BlogPostListComponent;
  let fixture: ComponentFixture<BlogPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,

        // Internal modules
        BlogPostModule,
        MarkdownModule,
      ],
      declarations: [
        BlogPostListComponent,
        BlogPostListItemComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
