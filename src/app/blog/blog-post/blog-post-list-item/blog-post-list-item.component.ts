import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BlogPost } from '../shared/model/blog-post';

@Component({
  selector: 'gb-blog-post-list-item',
  templateUrl: './blog-post-list-item.component.html',
  styleUrls: ['./blog-post-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostListItemComponent {
  @Input()
  post: BlogPost;
}
