
const expect = require('chai').expect
const fizzbuzzify = require('./fizzbuzzify')

describe('fizzbuzzify', () => {

  it("should convert a string to a fizzbuzzified string.", () => {
    expect(fizzbuzzify('')).to.equal('')
    expect(fizzbuzzify('ok')).to.equal('ok')
    expect(fizzbuzzify('ok ok ok')).to.equal('ok ok fizz')
    expect(fizzbuzzify('ok ok ok ok ok')).to.equal('ok ok fizz ok buzz')
    expect(fizzbuzzify('ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok')).to.equal(
      'ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz')

  })

})

