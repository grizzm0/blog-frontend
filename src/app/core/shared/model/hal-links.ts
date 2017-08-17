import { HalLink } from './hal-link';

export class HalLinks {
  self: HalLink;
  [key: string]: HalLink;
}
