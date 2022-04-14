const Item = require('../src/item')
const Shop = require('../src/shop')

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new Shop([new Item('foo', 0, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('foo')
  })

  it('decreases agedBries sellIn and increases quality', () => {
    // setup
    const agedBrie = new Item('Aged Brie', 2, 0)
    const gildedRose = new Shop([agedBrie])
    gildedRose.updateQuality()

    // verify
    expect(gildedRose.items[0].sellIn).toEqual(1)
    expect(gildedRose.items[0].quality).toEqual(1)
  })

  it('decreases backstage sellIn and increases quality', () => {
    // setup
    const backstage = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      15,
      20
    )
    const gildedRose = new Shop([backstage])
    gildedRose.updateQuality()
    // verify
    expect(gildedRose.items[0].sellIn).toEqual(14)
    expect(gildedRose.items[0].quality).toEqual(21)
  })

  it('decreases backstage sellIn and increases double of quality', () => {
    // setup
    const backstage = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      10,
      20
    )
    const gildedRose = new Shop([backstage])
    gildedRose.updateQuality()

    // verify
    expect(gildedRose.items[0].sellIn).toEqual(9)
    expect(gildedRose.items[0].quality).toEqual(22)
  })

  it('decreases backstage sellIn and increases triple of quality', () => {
    // setup
    const backstage = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      5,
      20
    )
    const gildedRose = new Shop([backstage])
    gildedRose.updateQuality()

    // verify
    expect(gildedRose.items[0].sellIn).toEqual(4)
    expect(gildedRose.items[0].quality).toEqual(23)
  })

  it('decreases backstage sellIn and drops to quality 0', () => {
    // setup
    const backstage = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      0,
      20
    )
    const gildedRose = new Shop([backstage])
    gildedRose.updateQuality()

    // verify
    expect(gildedRose.items[0].sellIn).toEqual(-1)
    expect(gildedRose.items[0].quality).toEqual(0)
  })

  it('decreases double the quality since it is conjurted', () => {
    // setup
    const conjured = new Item('Conjured Mana Cake', 3, 6)
    const gildedRose = new Shop([conjured])
    gildedRose.updateQuality()

    // verify
    expect(gildedRose.items[0].sellIn).toEqual(2)
    expect(gildedRose.items[0].quality).toEqual(4)
  })

  it('stops the quality to 0 after sellIn is lower than 0', () => {
    // setup
    const conjured = new Item('Conjured Mana Cake', -1, 0)
    const gildedRose = new Shop([conjured])
    gildedRose.updateQuality()

    // verify
    expect(gildedRose.items[0].sellIn).toEqual(-2)
    expect(gildedRose.items[0].quality).toEqual(0)
  })

  it('decreases quality by 2 since it passes sellIn', () => {
    // setup
    const item = new Item('Elixir of the Mongoose', 0, 2)
    const gildedRose = new Shop([item])
    gildedRose.updateQuality()

    // verify
    expect(gildedRose.items[0].sellIn).toEqual(-1)
    expect(gildedRose.items[0].quality).toEqual(0)
  })

  it('quality remains 0 after it reaches 0', () => {
    // setup
    const item = new Item('Elixir of the Mongoose', -2, 0)
    const gildedRose = new Shop([item])
    gildedRose.updateQuality()

    // verify
    expect(gildedRose.items[0].sellIn).toEqual(-3)
    expect(gildedRose.items[0].quality).toEqual(0)
  })

  it('remains sellIn and quality since the item is "Sulfurus"', () => {
    // setup
    const sulfurus = new Item('Sulfurus, Hand of Ragnaros', 0, 80)
    const gildedRose = new Shop([sulfurus])
    gildedRose.updateQuality()

    // verify
    expect(gildedRose.items[0].sellIn).toEqual(0)
    expect(gildedRose.items[0].quality).toEqual(80)
  })
})
