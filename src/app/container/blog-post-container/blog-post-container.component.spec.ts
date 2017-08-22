import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppModule } from '../../app.module';
import { BlogModule } from '../../blog/blog.module';
import { BlogPostModule } from '../../blog/blog-post/blog-post.module';
import { BlogPostContainerComponent } from './blog-post-container.component';

describe('BlogPostContainerComponent', () => {
  let component: BlogPostContainerComponent;
  let fixture: ComponentFixture<BlogPostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,

        // Internal modules
        AppModule,
        BlogModule,
        BlogPostModule,
      ],
      declarations: [
        BlogPostContainerComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
