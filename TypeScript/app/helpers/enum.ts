/* The Quality of an item never exceeds 50 */
export const MAX_QUALITY = 50
/* The Quality of an item is never negative */
export const MIN_QUALITY = 0

// - Once the sell by date has passed, Quality degrades twice as fast

// - "Aged Brie" actually increases in Quality the older it gets

// - "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
// - "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
// Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
// Quality drops to 0 after the concert