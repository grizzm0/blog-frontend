import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BlogPost } from '../shared/model/blog-post';

@Component({
  selector: 'gb-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostListComponent {
  @Input()
  posts: BlogPost[];
}
