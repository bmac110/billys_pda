var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add numbers together', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    const actual = calculator.runningTotal;
    assert.equal(actual, 5);
  })

  it('can subtract a number from another', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  })

  it('can multiply a number with another', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.equal(actual, 15);
  })

  it('can divide a number by another', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  })

  it('can concatenate numbers', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    const actual = calculator.runningTotal;
    assert.equal(actual, 12);
  })

  it('can chain multiple operations', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.operatorClick('+');
    const actual = calculator.runningTotal;
    assert.equal(actual, 2);
  })

  it('can clear running total without affecting calculation', function(){
    calculator.numberClick(2)
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.clearClick();
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.equal(actual, 5);
  })



});
