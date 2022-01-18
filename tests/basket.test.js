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
    console.log(`New Basket is empty ${result}`);
}

module.exports = { testNewBasketStartsEmpty }


