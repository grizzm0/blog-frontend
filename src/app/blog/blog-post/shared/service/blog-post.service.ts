import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BlogPostCollection } from '../model/blog-post-collection';

@Injectable()
export class BlogPostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<BlogPostCollection> {
    return this.http.get('/blog/post')
      .map(response => <BlogPostCollection>response);
  }
}
