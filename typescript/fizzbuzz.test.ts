
const expect = require('chai').expect
import FizzBuzzFn = require('./fizzbuzz-function');
import FizzBuzz = require("./fizzbuzz-class");
var FizzBuzzer = new FizzBuzz.FizzBuzz();

describe('fizzbuzz', () => {

  it("should properly convert string to a fizzbuzz'ed string.", () => {

    expect(FizzBuzzer.fizzbuzzify('')).to.equal('')
    expect(FizzBuzzer.fizzbuzzify('ok')).to.equal('ok')
    expect(FizzBuzzer.fizzbuzzify('ok ok ok')).to.equal('ok ok fizz')
    expect(FizzBuzzer.fizzbuzzify('ok ok ok ok ok')).to.equal('ok ok fizz ok buzz')
    expect(FizzBuzzer.fizzbuzzify('ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok')).to.equal('ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz')
    
    expect(FizzBuzzFn.fizzBuzz('')).to.equal('')
    expect(FizzBuzzFn.fizzBuzz('ok')).to.equal('ok')
    expect(FizzBuzzFn.fizzBuzz('ok ok ok')).to.equal('ok ok fizz')

  })

})