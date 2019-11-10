
const expect = require('chai').expect
import Fizzbuzz from './fizzbuzzify-string';

describe('Fizzbuzz.fizzbuzzify', () => {

  it("should convert a string to a fizzbuzzified string.", () => {

    expect(Fizzbuzz.fizzbuzzify('')).to.equal('')
    expect(Fizzbuzz.fizzbuzzify('ok')).to.equal('ok')
    expect(Fizzbuzz.fizzbuzzify('ok ok ok')).to.equal('ok ok fizz')
    expect(Fizzbuzz.fizzbuzzify('ok ok ok ok ok')).to.equal('ok ok fizz ok buzz')
    expect(Fizzbuzz.fizzbuzzify('ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok')).to.equal(
      'ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz')
  })

})