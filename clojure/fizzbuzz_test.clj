(ns e2.fizzbuzz_test
  (require [e2.fizzbuzz :refer [fizzbuzz]]))
(use 'clojure.test)

(deftest fizzbuzzTest
  (is (= (fizzbuzz "") ""))
  (is (= (fizzbuzz "ok") "ok"))
  (is (= (fizzbuzz "ok ok ok") "ok ok fizz"))
  (is (= (fizzbuzz "ok ok ok ok ok") "ok ok fizz ok buzz"))
  (is (= (fizzbuzz "ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok") 
    "ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz")))

(run-tests)