import { GildedRose } from '@/classes/gilded-rose';
import { Item } from '@/classes/item'

const updateQualityRecursive = (gildedRose: GildedRose, limit ) : GildedRose => {
  if (!limit) return gildedRose;

  console.log(limit)
  gildedRose.updateQuality();

  return updateQualityRecursive(gildedRose, limit -= 1);
}

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

    const [item] = updateQualityRecursive(gildedRose, 2).items


    expect(item.name).toBe(itemName);
    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(0);
  });
});

describe('update quality aged brie', () => {
  it('quality is incremented, sell in is decremented', () => {
    const itemName = 'Aged Brie';
    const gildedRose = new GildedRose([new Item(itemName, 0, 0)]);
    
    const [item] = updateQualityRecursive(gildedRose, 11).items

    expect(item.name).toBe(itemName);
    expect(item.sellIn).toBe(-11);
    expect(item.quality).toBe(21);
  });

  it('quality is incremented and quality never exceeds max value', () => {
    const itemName = 'Aged Brie';
    const gildedRose = new GildedRose([new Item(itemName, 20, 45)]);
    
    const [item] = updateQualityRecursive(gildedRose, 11).items

    expect(item.name).toBe(itemName);
    expect(item.sellIn).toBe(9);
    expect(item.quality).toBe(50);
  });
});
