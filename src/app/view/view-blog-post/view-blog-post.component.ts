import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BlogPost } from '../../blog/shared/model/blog-post';
import { BlogState, BlogPostSelector } from '../../blog/shared/reducer/blog.reducer';
import { BlogPostLoadAction, BlogPostSelectAction } from '../../blog/shared/action/blog-post.action';

@Component({
  selector: 'gb-view-blog-post',
  templateUrl: './view-blog-post.component.html',
  styleUrls: ['./view-blog-post.component.scss'],
})
export class ViewBlogPostComponent {
  post$: Observable<BlogPost>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<BlogState>
  ) {
    this.post$ = store.select(BlogPostSelector.getBlogPostSelected);

    // TODO: Handle 404 posts
    activatedRoute.params.subscribe(
      (params: string[]) => {
        store.dispatch(new BlogPostSelectAction(params['id']));
        store.dispatch(new BlogPostLoadAction(params['id']));
      }
    );
  }
}
