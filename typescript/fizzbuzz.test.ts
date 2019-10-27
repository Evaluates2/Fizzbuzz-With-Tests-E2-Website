
const expect = require('chai').expect
import Fizzbuzz from './fizzbuzz';

describe('fizzbuzz', () => {

  it("should properly convert string to a fizzbuzzified string.", () => {

    expect(Fizzbuzz.fizzbuzz('')).to.equal('')
    expect(Fizzbuzz.fizzbuzz('ok')).to.equal('ok')
    expect(Fizzbuzz.fizzbuzz('ok ok ok')).to.equal('ok ok fizz')
    expect(Fizzbuzz.fizzbuzz('ok ok ok ok ok')).to.equal('ok ok fizz ok buzz')
    expect(Fizzbuzz.fizzbuzz('ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok')).to.equal(
      'ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz')
  })

})