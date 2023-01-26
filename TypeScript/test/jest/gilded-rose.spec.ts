import { GildedRose } from '@/classes/gilded-rose';
import { Item } from '@/classes/item'

describe('Gilded Rose', () => {
  it('should foo', () => {
    const itemName = 'foo';
    const gildedRose = new GildedRose([new Item(itemName, 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(itemName);
  });
});

describe('update quality base item', () => {
  it('quality is decremented if conditions are met, sellin is decremented', () => {
    const itemName = 'foo';
    const gildedRose = new GildedRose([new Item(itemName, 1, 1)]);

    gildedRose.updateQuality();

    const [item] = gildedRose.updateQuality();

    expect(item.name).toBe(itemName);
    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(0);
  });
});
