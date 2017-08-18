import { HalResource } from './hal-resource';
import { HalEmbedded } from './hal-embedded';

export class HalCollection extends HalResource {
  _total_items: number;
  _page: number;
  _page_count: number;
  _embedded: HalEmbedded;
}
