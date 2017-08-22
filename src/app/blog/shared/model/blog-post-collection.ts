import { BlogPost } from './blog-post';
import { HalCollection } from '../../../shared/model/hal-collection';

export class BlogPostCollection extends HalCollection {
  _embedded: {
    posts: BlogPost[],
  } = {
    posts: [],
  };

  static cloneWithState(state: BlogPostCollection): BlogPostCollection {
    const clone = new BlogPostCollection();

    clone._embedded    = { ...state._embedded};
    clone._links       = { ...state._links};

    clone._page        = state._page;
    clone._page_count  = state._page_count;
    clone._total_items = state._total_items;

    return clone;
  }

  addPost(blogPost: BlogPost): void {
    this._addPost(blogPost);
    this._sortPosts();
  }

  addPosts(blogPosts: BlogPost[]): void {
    blogPosts.forEach(blogPost => {
      this._addPost(blogPost);
    });

    this._sortPosts();
  }

  private _addPost(blogPost: BlogPost): void {
    this._embedded.posts = this._embedded.posts.filter(item => item.id !== blogPost.id);
    this._embedded.posts = [...this._embedded.posts, blogPost];
  }

  private _sortPosts(): void {
    this._embedded.posts.sort((a: BlogPost, b: BlogPost) => {
      if (a.created.date > b.created.date) {
        return -1;
      }

      if (a.created.date < b.created.date) {
        return 1;
      }

      return 0;
    });
  }
}
