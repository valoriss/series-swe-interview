import { expect } from 'chai';
import { GildedRose } from '@/classes/gilded-rose';
import { Item } from '@/classes/item';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const itemName = 'foo';
    const gildedRose = new GildedRose([new Item(itemName, 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal(itemName);
  });
});
