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
const underMaxQuality = (quality: number): boolean => {
    return quality < MAX_QUALITY
}

/* If true, update the quality of an item  */
const exceedsMinQuality = (quality: number): boolean => {
    return quality > MIN_QUALITY;
}

const passedSellByDate = (sellBy: number) => sellBy < 0;



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
    /* The quality of the item will be decreased
     by a factor of 1 or 2 depending on the sell in date */
    item.quality = decrementQuality(item);
    /* for base items, the sell in date is always decremented by a factor of 1 */
    item.sellIn = decrementSellIn(item);

    return item
}

export const isBaseItem = (name: string) => {
    const foundItem = Object.values(specialItems).find((specialItem) => name.toLocaleLowerCase() === specialItem.toLocaleLowerCase())

    if (foundItem) return false

    return true
}