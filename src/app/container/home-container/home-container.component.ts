import { Component, HostListener, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import { BlogPostCollection } from '../../blog/shared/model/blog-post-collection';
import { BlogState, BlogPostSelector } from '../../blog/shared/reducer/blog.reducer';
import { BlogPostLoadLatestAction, BlogPostLoadMoreAction } from '../../blog/shared/action/blog-post.action';

@Component({
  selector: 'gb-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent implements OnDestroy {
  private subscription: Subscription;
  collection: BlogPostCollection;

  constructor(private store: Store<BlogState>) {
    this.subscription = this.store.select(BlogPostSelector.getBlogPostCollection)
      .subscribe(
        (collection) => this.collection = collection
      );

    this.store.dispatch(new BlogPostLoadLatestAction());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('window:scroll')
  private onScroll(): void {
    // Load latest when user scrolls to the top
    if (window.pageYOffset === 0) {
      this.store.dispatch(new BlogPostLoadLatestAction());
    }

    // Load more when user scrolls to the bottom
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      this.store.dispatch(new BlogPostLoadMoreAction(this.collection));
    }
  }
}
