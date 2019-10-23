
const expect = require('chai').expect
import FizzBuzzFile = require("./fizzbuzz");
describe('fizzbuzz', () => {

  it("should properly convert string to a fizzbuzz'ed string.", () => {

    expect(FizzBuzzFile.Fizzbuzz.fizzbuzz('')).to.equal('')
    expect(FizzBuzzFile.Fizzbuzz.fizzbuzz('ok')).to.equal('ok')
    expect(FizzBuzzFile.Fizzbuzz.fizzbuzz('ok ok ok')).to.equal('ok ok fizz')
    expect(FizzBuzzFile.Fizzbuzz.fizzbuzz('ok ok ok ok ok')).to.equal('ok ok fizz ok buzz')
    expect(FizzBuzzFile.Fizzbuzz.fizzbuzz('ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok')).to.equal('ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz')

  })

})