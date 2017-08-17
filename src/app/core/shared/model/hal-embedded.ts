import { HalResource } from './hal-resource';

export class HalEmbedded {
  [key: string]: HalResource[];
}
