import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BlogPost } from '../../blog/shared/model/blog-post';
import { BlogPostService } from '../../blog/shared/service/blog-post.service';

@Component({
  selector: 'gb-view-blog-post',
  templateUrl: './view-blog-post.component.html',
  styleUrls: ['./view-blog-post.component.scss'],
})
export class ViewBlogPostComponent implements OnInit {
  post$: Observable<BlogPost>;

  constructor(private activatedRoute: ActivatedRoute,
              private blogPostService: BlogPostService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: string[]) => {
      this.getPost(params['id']);
    });
  }

  private getPost(id: string): void {
    this.post$ = this.blogPostService.getPost(id);
  }
}
