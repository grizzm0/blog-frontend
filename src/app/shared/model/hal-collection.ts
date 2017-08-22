import { HalCollectionLinks } from './hal-collection-links';
import { HalEmbedded } from './hal-embedded';
import { HalResource } from './hal-resource';

export class HalCollection extends HalResource {
  _embedded: HalEmbedded = new HalEmbedded;
  _links: HalCollectionLinks = new HalCollectionLinks;
  _total_items: number = null;
  _page: number = null;
  _page_count: number = null;
}
