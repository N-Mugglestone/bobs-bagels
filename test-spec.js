const { assertEquals } = require('./test-framework');

const compare10and10 = () => {
    // Arrange
    const actual = 10;
    const expected = 10;

    // Act
    // No act

    // Assert
    const result = assertEquals(actual, expected);

    // Report
    console.log(`10 and 10 should be equal: ${result}`);
}

const add2NumbersTest = () => {
    // Arrange
    const num1 = 10;
    const num2 = 10;
    const expected = 20;
    // Act
    const actual = num1 + num2;
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    console.log(`10 + 10 should be ${expected}: ${result}`);
}

module.exports = {
    compare10and10,
    add2NumbersTest
};