import { Item } from '@/classes/item';
import { isBaseItem, specialItems, updateQualityBaseItem } from '../helpers/updateQuality';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    // identify if base case
    this.items.forEach((item) => {
      const { name } = item
      const isRegularItem = isBaseItem(name) // TODO, decide if this function is worth having for future use cases

      if (isRegularItem) {
        return updateQualityBaseItem(item)
      }

      if (name === specialItems.brie) {
        // decrement for brie
      }


      if (name === specialItems.sulfaras) {
        // decrement for sulfaras
      }


      if (name === specialItems.conjured) {
        // decrement for conjured
      }


      if (name === specialItems.backstage) {
        // decrement for backstage
      }

      
    });

    // for (let i = 0; i < this.items.length; i++) {
    //   if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //     if (this.items[i].quality > 0) {
    //       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //         this.items[i].quality = this.items[i].quality - 1
    //       }
    //     }
    //   } else {
    //     if (this.items[i].quality < 50) {
    //       this.items[i].quality = this.items[i].quality + 1
    //       if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].sellIn < 11) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1
    //           }
    //         }
    //         if (this.items[i].sellIn < 6) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //     this.items[i].sellIn = this.items[i].sellIn - 1;
    //   }
    //   if (this.items[i].sellIn < 0) {
    //     if (this.items[i].name != 'Aged Brie') {
    //       if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].quality > 0) {
    //           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //             this.items[i].quality = this.items[i].quality - 1
    //           }
    //         }
    //       } else {
    //         this.items[i].quality = this.items[i].quality - this.items[i].quality
    //       }
    //     } else {
    //       if (this.items[i].quality < 50) {
    //         this.items[i].quality = this.items[i].quality + 1
    //       }
    //     }
    //   }
    // }

    return this.items;
  }
}
