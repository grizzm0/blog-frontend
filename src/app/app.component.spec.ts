import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { BlogPostModule } from './blog/blog-post/blog-post.module';
import { ViewModule } from './view/view.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // Internal modules
        BlogPostModule,
        ViewModule,
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
