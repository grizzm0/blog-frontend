import { Action } from '@ngrx/store';

import { BlogPost } from '../model/blog-post';
import { BlogPostCollection } from '../model/blog-post-collection';

export const BLOG_POST_LOAD = '[BlogPost] Load';
export const BLOG_POST_LOAD_COMPLETED = '[BlogPost] Load (Completed)';
export const BLOG_POST_LOAD_MORE = '[BlogPost] Load more';
export const BLOG_POST_LOAD_MORE_COMPLETED = '[BlostPost] Load more (Completed)';
export const BLOG_POST_LOAD_LATEST = '[BlogPost] Load latest';
export const BLOG_POST_LOAD_LATEST_COMPLETED = '[BlogPost] Load latest (Completed)';
export const BLOG_POST_SELECT  = '[BlogPost] Select';

export class BlogPostLoadAction implements Action {
  readonly type = BLOG_POST_LOAD;

  constructor(public payload: string) {}
}

export class BlogPostLoadCompletedAction implements Action {
  readonly type = BLOG_POST_LOAD_COMPLETED;

  constructor(public payload: BlogPost) {}
}

export class BlogPostLoadMoreAction implements Action {
  readonly type = BLOG_POST_LOAD_MORE;

  constructor(public payload: BlogPostCollection) {}
}

export class BlogPostLoadMoreCompletedAction implements Action {
  readonly type = BLOG_POST_LOAD_MORE_COMPLETED;

  constructor(public payload: BlogPostCollection) {}
}

export class BlogPostLoadLatestAction implements Action {
  readonly type = BLOG_POST_LOAD_LATEST;
}

export class BlogPostLoadLatestCompletedAction implements Action {
  readonly type = BLOG_POST_LOAD_LATEST_COMPLETED;

  constructor(public payload: BlogPostCollection) {}
}

export class BlogPostSelectAction implements Action {
  readonly type = BLOG_POST_SELECT;

  constructor(public payload: string) {}
}

export type Action =
  | BlogPostLoadAction
  | BlogPostLoadCompletedAction
  | BlogPostLoadMoreAction
  | BlogPostLoadMoreCompletedAction
  | BlogPostLoadLatestAction
  | BlogPostLoadLatestCompletedAction
  | BlogPostSelectAction;
