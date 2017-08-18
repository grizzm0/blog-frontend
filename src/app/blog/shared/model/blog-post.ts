import { HalResource } from '../../../shared/model/hal-resource';
import { DateTime } from '../../../shared/interface/date-time';

export class BlogPost extends HalResource {
  id: string;
  title: string;
  content: string;
  created: DateTime;
}
