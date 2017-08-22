import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { BlogPost } from '../model/blog-post';
import { BlogPostCollection } from '../model/blog-post-collection';
import { BlogPostService } from '../service/blog-post.service';
import {
  BLOG_POST_LOAD,
  BLOG_POST_LOAD_MORE,
  BLOG_POST_LOAD_LATEST,
  BlogPostLoadAction,
  BlogPostLoadCompletedAction,
  BlogPostLoadMoreAction,
  BlogPostLoadMoreCompletedAction,
  BlogPostLoadLatestAction,
  BlogPostLoadLatestCompletedAction,
} from '../action/blog-post.action';

@Injectable()
export class BlogPostEffect {
  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType<BlogPostLoadAction>(BLOG_POST_LOAD)
    .switchMap(action => {
      return this.blogPostService.getPost(action.payload)
        .catch(() => Observable.of(null));
    })
    .map((item: BlogPost) => new BlogPostLoadCompletedAction(item));

  @Effect()
  loadMore$: Observable<Action> = this.actions$
    .ofType<BlogPostLoadMoreAction>(BLOG_POST_LOAD_MORE)
    .switchMap(action => this.blogPostService.getNextPage(action.payload))
    .map((collection: BlogPostCollection) => new BlogPostLoadMoreCompletedAction(collection));

  @Effect()
  loadLatest$: Observable<Action> = this.actions$
    .ofType<BlogPostLoadLatestAction>(BLOG_POST_LOAD_LATEST)
    .switchMap(action => this.blogPostService.getLatest())
    .map((collection: BlogPostCollection) => new BlogPostLoadLatestCompletedAction(collection));

  constructor(private actions$: Actions, private blogPostService: BlogPostService) { }
}
