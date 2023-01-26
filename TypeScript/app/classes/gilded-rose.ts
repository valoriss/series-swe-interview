import { Item } from '@/classes/item';
import {
  isBaseItem,
  specialItems,
  updateAgedBrie,
  updateBackstagePasses,
  updateConjured,
  updateQualityBaseItem,
  updateSulfaras
} from '../helpers/updateQuality';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      const { name } = item
      const isRegularItem = isBaseItem(name) // TODO, decide if this function is worth having for future use cases

      if (isRegularItem)  return updateQualityBaseItem(item)

      if (name === specialItems.brie) return updateAgedBrie(item)
      
      if (name === specialItems.sulfaras) return updateSulfaras(item)

      if (name === specialItems.conjured) return updateConjured(item)

      if (name === specialItems.backstage) return updateBackstagePasses(item)
    });

    return this.items;
  }
}
