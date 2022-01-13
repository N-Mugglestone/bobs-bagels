const assertEquals = require(`./test-framework`)
const basket = require()
// a new basket starts empty 

const testNewBasketStartsEmpty = () => {
    //Arrange 
    cost expected = 0;

    //Act 
    const actual = new basket().items.length
    //Assert 
    const result = assertEquals(actual, expected);
    //Report 
    console.log(`New Basket is empty ${result}`);
}

module.exports