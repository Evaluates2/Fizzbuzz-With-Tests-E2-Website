require "rspec"
require_relative "./fizzbuzz.rb"

test = describe "Fizzbuzz" do
  it "Adds two numbers" do
    expect(fizzbuzz('')).to eq("")
    expect(fizzbuzz('ok')).to eq("ok")
    expect(fizzbuzz('ok ok ok')).to eq("ok ok fizz")
    expect(fizzbuzz('ok ok ok ok ok')).to eq("ok ok fizz ok buzz")
    expect(fizzbuzz("ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok")).to eq(
        "ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz")
  end

end

p test.run