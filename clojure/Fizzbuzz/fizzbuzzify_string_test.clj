(ns Fizzbuzzify.fizzbuzzify_string_test
  (require [Fizzbuzz.fizzbuzzify_string :refer [fizzbuzzify]]))
(use 'clojure.test)

(deftest fizzbuzzifyTest
  "should convert a string to a fizzbuzzified string."
  (is (= (fizzbuzzify "") "d"))
  (is (= (fizzbuzzify "ok") "ok"))
  (is (= (fizzbuzzify "ok ok ok") "ok ok fizz"))
  (is (= (fizzbuzzify "ok ok ok ok ok") "ok ok fizz ok buzz"))
  (is (= (fizzbuzzify "ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok") 
         "ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz")))
(run-tests)