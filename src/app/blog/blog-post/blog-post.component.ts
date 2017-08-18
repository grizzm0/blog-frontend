import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BlogPost } from '../shared/model/blog-post';

@Component({
  selector: 'gb-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostComponent {
  @Input()
  post: BlogPost;
}
