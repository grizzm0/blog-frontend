import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdCardModule, MdTooltipModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { MomentModule } from 'angular2-moment';

import { BlogPostComponent } from './blog-post.component';
import { CoreModule } from '../../core/core.module';

describe('BlogPostComponent', () => {
  let component: BlogPostComponent;
  let fixture: ComponentFixture<BlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdCardModule,
        MdTooltipModule,
        MomentModule,
        RouterTestingModule,

        // Internal modules
        CoreModule,
      ],
      declarations: [
        BlogPostComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
