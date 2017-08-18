import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdCardModule, MdTooltipModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { BlogPostListItemComponent } from './blog-post-list-item.component';
import { CoreModule } from '../../../core/core.module';

describe('BlogPostListItemComponent', () => {
  let component: BlogPostListItemComponent;
  let fixture: ComponentFixture<BlogPostListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdCardModule,
        MdTooltipModule,
        MomentModule,

        // Internal modules
        CoreModule,
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
