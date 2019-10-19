
const expect = require('chai').expect
const fizzbuzzFn = require('./fizzbuzz-function')

describe('fizzbuzz', () => {

  it("should properly convert string to a fizzbuzz'ed string.", () => {

    expect(fizzbuzzFn('')).to.equal('')
    expect(fizzbuzzFn('ok')).to.equal('ok')
    expect(fizzbuzzFn('ok ok ok')).to.equal('ok ok fizz')
    expect(fizzbuzzFn('ok ok ok ok ok')).to.equal('ok ok fizz ok buzz')
    expect(fizzbuzzFn('ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok')).to.equal('ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz')

  })

})