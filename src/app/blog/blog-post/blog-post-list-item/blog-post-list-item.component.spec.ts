import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MdCardModule, MdTooltipModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { BlogPostService } from '../shared/service/blog-post.service';
import { BlogPostListItemComponent } from './blog-post-list-item.component';
import { CoreModule } from '../../../core/core.module';

describe('BlogPostListItemComponent', () => {
  let component: BlogPostListItemComponent;
  let fixture: ComponentFixture<BlogPostListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,

        MdCardModule,
        MdTooltipModule,
        MomentModule,

        CoreModule,
      ],
      declarations: [
        BlogPostListItemComponent,
      ],
      providers: [
        BlogPostService,
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
