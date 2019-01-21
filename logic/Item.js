const ItemData = require('../data/item.json');
console.log(ItemData);
class Item{
    constructor(
        local_id,
        name,
        atk,
        def,
        type,
        healing,
        damage
    ){
        this.local_id = local_id,
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.type = type;
        this.healing = healing;
        this.damage = damage;
    }
}

const itemData  = ItemData[0];

const potion = new Item(
    this.type = itemData.type,
    this.name = itemData.name,
    this.healing = itemData.healing,
    this.atk = null,
    this.def = null,
    this.damage = null
)

console.log(potion);


module.exports = {Item: Item};