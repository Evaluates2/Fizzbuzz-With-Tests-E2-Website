
const expect = require('chai').expect
const FizzBuzz = require('./fizzbuzz-class')
const fizzbuzzFn = require('./fizzbuzz-function')

describe('fizzbuzz', () => {

  it("should properly convert string to a fizzbuzz'ed string.", () => {

    expect(FizzBuzz.fizzbuzzify('')).to.equal('')
    expect(FizzBuzz.fizzbuzzify('ok')).to.equal('ok')
    expect(FizzBuzz.fizzbuzzify('ok ok ok')).to.equal('ok ok fizz')
    expect(FizzBuzz.fizzbuzzify('ok ok ok ok ok')).to.equal('ok ok fizz ok buzz')
    expect(FizzBuzz.fizzbuzzify('ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok')).to.equal('ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz')
    
    expect(fizzbuzzFn('')).to.equal('')
    expect(fizzbuzzFn('ok')).to.equal('ok')
    expect(fizzbuzzFn('ok ok ok')).to.equal('ok ok fizz')
    expect(fizzbuzzFn('ok ok ok ok ok')).to.equal('ok ok fizz ok buzz')
    expect(fizzbuzzFn('ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok')).to.equal('ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz')
    
  })

})