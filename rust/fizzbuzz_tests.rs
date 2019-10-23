use crate::fizzbuzz;

pub fn run_tests() {
  println!("Running fizzbuzzify tests!");

  assert_eq!(fizzbuzz::fizzbuzzify(""), "");
  assert_eq!(fizzbuzz::fizzbuzzify("ok"), "ok");
  assert_eq!(fizzbuzz::fizzbuzzify("ok ok ok"), "ok ok fizz");
  assert_eq!(fizzbuzz::fizzbuzzify("ok ok ok ok ok"), "ok ok fizz ok buzz");
  assert_eq!(fizzbuzz::fizzbuzzify("ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok"), 
  "ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz");

}