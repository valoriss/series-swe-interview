import { expect } from 'chai';

import { GildedRose } from '@/classes/gilded-rose';
import { Item } from '@/classes/item'

describe('Gilded Rose', () => {
  it('should foo', () => {
    const itemName = 'foo';
    const gildedRose = new GildedRose([new Item(itemName, 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal(itemName);
  });
});

// TODO, move to a new folder called helpers in jest/helpers
const updateQualityRecursive = (gildedRose: GildedRose, limit ) : GildedRose => {
  if (!limit) return gildedRose;

  gildedRose.updateQuality();

  return updateQualityRecursive(gildedRose, limit -= 1);
}

describe('Gilded Rose', () => {
  it('should foo', () => {
    const itemName = 'foo';
    const gildedRose = new GildedRose([new Item(itemName, 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal(itemName);
  });
});

describe('update quality base item', () => {
  it('quality is decremented if conditions are met, sellin is decremented', () => {
    const itemName = 'foo';
    const gildedRose = new GildedRose([new Item(itemName, 5, 7)]);

    const [item] = updateQualityRecursive(gildedRose, 9).items


    expect(item.name).to.equal(itemName);
    expect(item.sellIn).to.equal(-4);
    expect(item.quality).to.equal(0);
  });
});

describe('update quality aged brie', () => {
  it('quality is incremented, sell in is decremented', () => {
    const itemName = 'Aged Brie';
    const gildedRose = new GildedRose([new Item(itemName, 0, 0)]);
    
    const [item] = updateQualityRecursive(gildedRose, 11).items

    expect(item.name).to.equal(itemName);
    expect(item.sellIn).to.equal(-11);
    expect(item.quality).to.equal(22);
  });

  it('quality is incremented and quality never exceeds max value', () => {
    const itemName = 'Aged Brie';
    const gildedRose = new GildedRose([new Item(itemName, 20, 45)]);
    
    const [item] = updateQualityRecursive(gildedRose, 11).items

    expect(item.name).to.equal(itemName);
    expect(item.sellIn).to.equal(9);
    expect(item.quality).to.equal(50);
  });
});

describe('update quality sulfaras', () => {
  it('quality and sellin is never incremented for sulfaras', () => {
    const itemName = 'Sulfuras, Hand of Ragnaros';
    const gildedRose = new GildedRose([new Item(itemName, 0, 80)]);
    
    const [item] = updateQualityRecursive(gildedRose, 11).items

    expect(item.name).to.equal(itemName);
    expect(item.sellIn).to.equal(0);
    expect(item.quality).to.equal(80);
  });
});


describe('update quality backstage passes', () => {
  it('quality increments by 2 if sellin <= 10', () => {
    const itemName = 'Backstage passes to a TAFKAL80ETC concert';
    const gildedRose = new GildedRose([new Item(itemName, 15, 20)]);

    const [item] = updateQualityRecursive(gildedRose, 11).items

    expect(item.name).to.equal(itemName);
    expect(item.sellIn).to.equal(4);
    expect(item.quality).to.equal(40);
  });

  it('quality increments but never exceeds 50', () => {
    const itemName = 'Backstage passes to a TAFKAL80ETC concert';
    const gildedRose = new GildedRose([new Item(itemName, 10, 47)]);

    const [item] = updateQualityRecursive(gildedRose, 9).items

    expect(item.name).to.equal(itemName);
    expect(item.sellIn).to.equal(1);
    expect(item.quality).to.equal(50);
  });

  it('quality increments but drops to zero after the concert', () => {
    const itemName = 'Backstage passes to a TAFKAL80ETC concert';
    const gildedRose = new GildedRose([new Item(itemName, 10, 47)]);

    const [item] = updateQualityRecursive(gildedRose, 12).items

    expect(item.name).to.equal(itemName);
    expect(item.sellIn).to.equal(-2);
    expect(item.quality).to.equal(0);
  });
});

describe('update quality conjured', () => {
  it('quality decreases twice as fast as normal items', () => {
    const itemName = 'Conjured Mana Cake';
    const gildedRose = new GildedRose([new Item(itemName, 0, 20)]);
    
    const [item] = updateQualityRecursive(gildedRose, 11).items

    expect(item.name).to.equal(itemName);
    expect(item.sellIn).to.equal(-11);
    expect(item.quality).to.equal(0);
  });
});