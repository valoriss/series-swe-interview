import { Item } from '@/classes/item';
import { MAX_QUALITY, MIN_QUALITY } from "./enum";

// potentially move to enums
export const specialItems = {
    brie: 'Aged Brie',
    sulfaras: 'Sulfuras, Hand of Ragnaros',
    backstage: 'Backstage passes to a TAFKAL80ETC concert',
    conjured: 'Conjured Mana Cake'
}

/* If true, update the quality of an item  */
const exceedsMaxQuality = (quality: number): boolean => {
    return quality >= MAX_QUALITY
}

/* If true, update the quality of an item  */
const exceedsMinQuality = (quality: number): boolean => {
    return quality > MIN_QUALITY;
}

const passedSellByDate = (sellBy: number) => sellBy < 0;

export const updateAgedBrie = (item: Item) : Item => {
    item.sellIn = decrementSellIn(item)
    /* Aged brie increases in quality EOD, so increment */
    item.quality = incrementQuality(item);

    return item
}

export const updateSulfaras = (item: Item) : Item => {
    /* "Sulfuras", being a legendary item,
     never has to be sold. For clarity, increment by zero */
     item.sellIn += 0

     /* "Sulfuras" is a legendary item and as such
     its Quality is 80 and it never alters. */
     item.quality = 80 // TODO, move to ENUM

     return item;
}

export const updateConjured = (item: Item): Item => {
    item.sellIn = decrementSellIn(item);
    item.quality = decrementQuality(item);
    item.quality = decrementQuality(item);

    return item
}

export const updateBackstagePasses = (item: Item): Item => {
    item.sellIn = decrementSellIn(item)
    /* if the sell in date has passed, aka it is after the concert, quality drops to 0 */
    if (item.sellIn < 0) {
        item.quality = 0;
        return item
    }

    /* if there are 5 or less days, increment quality by 3 */
    if (item.sellIn <= 5) {
        item.quality = incrementQuality(item, 3)
        return item
    }

    /* if there are more than 5 but less than 11 days, increment by 2 */
    if (item.sellIn <= 10) {
        item.quality = incrementQuality(item, 2)
        return item
    }

    /* if sell in date is greater than 10, increment like aged brie */
    item.quality = incrementQuality(item)

    return item
    /*
Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
Quality drops to 0 after the concert */
}

const incrementQuality = (item: Item, incrementByOverride: number = 0): number => {
    const incrementBy = passedSellByDate(item.sellIn) ? 2 : 1

    if (exceedsMaxQuality(item.quality)) return item.quality;

    // increment quality
    item.quality += (incrementByOverride || incrementBy)

    if (exceedsMaxQuality(item.quality)) return item.quality = MAX_QUALITY

    return item.quality
}

/* Only decrement quality if the quality exceeds the min quality */
const decrementQuality = (item: Item): number => {
    const decrementBy = passedSellByDate(item.sellIn) ? 2 : 1

    if (exceedsMinQuality(item.quality)) {
        return item.quality -= decrementBy
    }

    // does not exceed the min quality, do not modify quality
    return item.quality
}

/* decrement sell in by one at the end of the day */
const decrementSellIn = (item: Item): number => item.sellIn -= 1

export const updateQualityBaseItem = (item: Item) :Item => {
    /* for base items, the sell in date is always decremented by a factor of 1 */
    item.sellIn = decrementSellIn(item);

    /* The quality of the item will be decreased
    by a factor of 1 or 2 depending on the sell in date */
    item.quality = decrementQuality(item);

    return item
}

export const isBaseItem = (name: string) => {
    const foundItem = Object.values(specialItems).find((specialItem) => name.toLocaleLowerCase() === specialItem.toLocaleLowerCase())

    if (foundItem) return false

    return true
}