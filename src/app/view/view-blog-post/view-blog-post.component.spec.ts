import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BlogModule } from '../../blog/blog.module';
import { BlogPostModule } from '../../blog/blog-post/blog-post.module';
import { ViewBlogPostComponent } from './view-blog-post.component';

describe('ViewBlogPostComponent', () => {
  let component: ViewBlogPostComponent;
  let fixture: ComponentFixture<ViewBlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,

        // Internal modules
        BlogModule,
        BlogPostModule,
      ],
      declarations: [
        ViewBlogPostComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
