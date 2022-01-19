const assertEquals = require("../test-framework");
const Basket = require("../src/basket")

const testNewBasketStartsEmpty = () => {
    //Arrange 
    const expected = 0;

    //Act 
    const actual = new Basket().items.length

    //Assert 
    const result = assertEquals(actual, expected);

    //Report 
    console.log(`New Basket is empty: ${result}`);
}

const addItemToBasket = () => {
    //Arrange 
    const testBasket = new Basket()
    const expected = 1;

    //Act
    testBasket.addItem()
    const actual = testBasket.addItem.length

    //Assert
    const result = assertEquals(actual, expected);

    //Report 
    console.log(`Item added to basket: ${result}`);

}

const removeItemFromBasketOfOne = () => {
    //Arrange 
    const testBasket = new Basket()
    const expected = 0;

    //Act
    testBasket.addItem('test item')
    testBasket.removeItem('test item')
    const actual = testBasket.items.length

    //Assert
    const result = assertEquals(actual, expected);

    //Report 
    console.log(`Item removed from basket: ${result}`);

}

const removeItemFromBasket = () => {
    //Arrange 
    const testBasket = new Basket()
    const expected = 0;

    //Act
    testBasket.addItem('item 1', 'item 2')
    testBasket.removeItem('item 1')
    const actual = testBasket.items.length

    //Assert
    const result = assertEquals(actual, expected);

    //Report 
    console.log(`Item removed from basket: ${result}`);

}

module.exports = {
    testNewBasketStartsEmpty,
    addItemToBasket,
    removeItemFromBasketOfOne,
    removeItemFromBasket
}


