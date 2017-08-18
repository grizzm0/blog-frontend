import { HalCollection } from '../../../shared/model/hal-collection';
import { BlogPost } from './blog-post';

export class BlogPostCollection extends HalCollection {
  _embedded: { 'posts': BlogPost[] };
}
