import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../../../shared/reducer/app.reducer';
import { BlogPostReducer, blogPostSelector, BlogPostState } from './blog-post.reducer';

interface BlogStateInterface {
  blogPost: BlogPostState;
}

export interface BlogState extends AppState {
  blog: BlogStateInterface;
}

export const BlogReducer = {
  blogPost: BlogPostReducer,
};

const getBlogState = createFeatureSelector<BlogStateInterface>('blog');
const getBlogPostState = createSelector(
  getBlogState,
  (state: BlogStateInterface) => state.blogPost,
);

export class BlogPostSelector {
  static getBlogPostCollection = createSelector(
    getBlogPostState,
    blogPostSelector.getCollection,
  );

  static getBlogPostSelected = createSelector(
    getBlogPostState,
    blogPostSelector.getSelected,
  );
}
