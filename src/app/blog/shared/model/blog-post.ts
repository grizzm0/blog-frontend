import { HalResource } from '../../../core/shared/model/hal-resource';
import { DateTime } from '../../../core/shared/interface/date-time';

export class BlogPost extends HalResource {
  id: string;
  title: string;
  content: string;
  created: DateTime;
}
