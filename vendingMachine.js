class VendingMachine {
  constructor(items, initialMoney) {
    this.items = items;
    this.money = initialMoney;
  }

  vend(code, insertedMoney) {

    const selection = code.toUpperCase();


    const item = this.items.find(i => i.code.toUpperCase() === selection);


    if (!item) {
      return `Invalid selection! : Money in vending machine = ${this.money.toFixed(2)}`;
    }


    if (item.quantity === 0) {
      return `${item.name}: Out of stock!`;
    }


    if (insertedMoney < item.price) {
      return `Not enough money!`;
    }


    item.quantity -= 1;
    this.money += item.price;

    const change = +(insertedMoney - item.price).toFixed(2);


    if (change > 0) {
      return `Vending ${item.name} with ${change.toFixed(2)} change.`;
    } else {
      return `Vending ${item.name}`;
    }
  }
}