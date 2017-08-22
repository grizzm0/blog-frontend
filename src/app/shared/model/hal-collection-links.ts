import { HalLink } from './hal-link';
import { HalLinks } from './hal-links';

export class HalCollectionLinks extends HalLinks {
  prev: HalLink;
  next: HalLink;
  first: HalLink;
  last: HalLink;
}
