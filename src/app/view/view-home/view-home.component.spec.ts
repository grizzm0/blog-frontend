import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppModule } from '../../app.module';
import { BlogModule } from '../../blog/blog.module';
import { BlogPostListModule } from '../../blog/blog-post-list/blog-post-list.module';
import { ViewHomeComponent } from './view-home.component';
import { VIEW_HOME_ROUTES } from './view-home.routes';

describe('ViewHomeComponent', () => {
  let component: ViewHomeComponent;
  let fixture: ComponentFixture<ViewHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(VIEW_HOME_ROUTES),

        // Internal modules
        AppModule,
        BlogModule,
        BlogPostListModule,
      ],
      declarations: [
        ViewHomeComponent,
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
