import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppModule } from '../../app.module';
import { BlogModule } from '../../blog/blog.module';
import { BlogPostListModule } from '../../blog/blog-post-list/blog-post-list.module';
import { HomeContainerComponent } from './home-container.component';
import { HOME_CONTAINER_ROUTES } from './home-container.routes';

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(HOME_CONTAINER_ROUTES),

        // Internal modules
        AppModule,
        BlogModule,
        BlogPostListModule,
      ],
      declarations: [
        HomeContainerComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
