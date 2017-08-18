import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { BlogPostCollection } from '../../blog/shared/model/blog-post-collection';
import { BlogPostService } from '../../blog/shared/service/blog-post.service';

@Component({
  selector: 'gb-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss'],
})
export class ViewHomeComponent implements OnInit {
  collection$: Observable<BlogPostCollection>;

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit(): void {
    this.collection$ = this.blogPostService.getPosts();
  }
}
