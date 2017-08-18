import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BlogPost } from '../model/blog-post';
import { BlogPostCollection } from '../model/blog-post-collection';

@Injectable()
export class BlogPostService {

  constructor(private http: HttpClient) { }

  getPost(id: string): Observable<BlogPost> {
    return this.http.get('/blog/post/' + id)
      .map(response => <BlogPost>response);
  }

  getPosts(): Observable<BlogPostCollection> {
    return this.http.get('/blog/post')
      .map(response => <BlogPostCollection>response);
  }
}
