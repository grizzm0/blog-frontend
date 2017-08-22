import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppModule } from '../../app.module';
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
        AppModule,
        BlogModule,
        BlogPostModule,
      ],
      declarations: [
        ViewBlogPostComponent,
      ],

      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
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
