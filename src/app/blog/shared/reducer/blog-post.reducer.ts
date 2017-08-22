import { createSelector } from '@ngrx/store';

import { BlogPost } from '../model/blog-post';
import { BlogPostCollection } from '../model/blog-post-collection';
import {
  Action,
  BLOG_POST_LOAD_COMPLETED,
  BLOG_POST_LOAD_MORE_COMPLETED,
  BLOG_POST_LOAD_LATEST_COMPLETED,
  BLOG_POST_SELECT,
} from '../action/blog-post.action';

export interface BlogPostState {
  collection: BlogPostCollection;
  selected: string;
}

const initialState: BlogPostState = {
  collection: new BlogPostCollection(),
  selected: null,
};

export function BlogPostReducer(
  state = initialState,
  action: Action
): BlogPostState {
  switch (action.type) {
    case BLOG_POST_LOAD_COMPLETED: {
      if (action.payload === null) {
        return state;
      }

      const collection = BlogPostCollection.cloneWithState(state.collection);
      collection.addPost(action.payload);

      return {
        collection: collection,
        selected: state.selected,
      };
    }

    case BLOG_POST_LOAD_MORE_COMPLETED: {
      const collection = BlogPostCollection.cloneWithState(state.collection);
      collection.addPosts(action.payload._embedded.posts);
      collection._links = action.payload._links;

      return {
        collection: collection,
        selected: state.selected,
      };
    }

    case BLOG_POST_LOAD_LATEST_COMPLETED: {
      const collection = BlogPostCollection.cloneWithState(state.collection);
      collection.addPosts(action.payload._embedded.posts);

      // Only add links if missing
      if (collection._links.self === null) {
        collection._links = action.payload._links;
      }

      return {
        collection: collection,
        selected: state.selected,
      };
    }

    case BLOG_POST_SELECT:
      return {
        collection: state.collection,
        selected: action.payload,
      };

    default:
      return state;
  }
}

const getCollection = (state: BlogPostState) => state.collection;
const getSelected = createSelector(
  getCollection,
  (state: BlogPostState) => state.selected,
  (collection: BlogPostCollection, selected: string) => {
    return collection._embedded.posts.find((blogPost: BlogPost) => blogPost.id === selected);
  }
);

export const blogPostSelector = {
  getCollection,
  getSelected
};
