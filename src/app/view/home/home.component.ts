import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { BlogPostService } from '../../blog/shared/service/blog-post.service';
import { BlogPostCollection } from '../../blog/shared/model/blog-post-collection';

@Component({
  selector: 'gb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  collection$: Observable<BlogPostCollection>;

  constructor(private postService: BlogPostService) { }

  ngOnInit(): void {
    this.collection$ = this.postService.getPosts();
  }
}
