class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateAgedBrie(item) {
    item.sellIn--
    if (item.quality <= 50) item.quality++
    if (item.sellIn < 0 && item.quality < 50) item.quality++
  }

  updateBackstage(item) {
    item.sellIn--
    item.quality++
    if (item.sellIn <= 10) item.quality++
    if (item.sellIn <= 5) item.quality++
    if (item.sellIn < 0) item.quality = 0
  }

  updateConjured(item) {
    item.sellIn--
    if (item.quality <= 50) item.quality -= 2
    if (item.quality <= 0) item.quality = 0
  }

  updateSulfurus(item) {
    return item
  }

  updateItem(item) {
    item.sellIn--
    if (item.quality <= 50) item.quality--
    if (item.sellIn <= 0) item.quality--
    if (item.quality < 0) item.quality = 0
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name === 'Aged Brie') {
        this.updateAgedBrie(item)
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateBackstage(item)
      } else if (item.name === 'Sulfurus, Hand of Ragnaros') {
        this.updateSulfurus(item)
      } else if (item.name.includes('Conjured')) {
        this.updateConjured(item)
      } else {
        this.updateItem(item)
      }
    }
    return this.items
  }
}

module.exports = Shop
