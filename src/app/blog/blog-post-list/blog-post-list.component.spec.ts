import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule, MdTooltipModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { BlogPostListComponent } from './blog-post-list.component';
import { BlogPostListItemComponent } from './blog-post-list-item/blog-post-list-item.component';
import { CoreModule } from '../../core/core.module';

describe('BlogPostListComponent', () => {
  let component: BlogPostListComponent;
  let fixture: ComponentFixture<BlogPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        MdCardModule,
        MdTooltipModule,
        MomentModule,

        // Internal modules
        CoreModule,
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
