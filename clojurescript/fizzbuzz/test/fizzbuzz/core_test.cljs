(ns fizzbuzz.core-test
    (:require [cljs.test :refer-macros [deftest async testing is use-fixtures]]
              [fizzbuzz.core :as core]))

(enable-console-print!)

(deftest adder
  (testing "Does the adder add?"
    (is (= 5 (core/adder 2 3))))
  (testing "and the not-adder?"
    (is (not (= 5 (core/not-adder 2 3))))))

(deftest fizzbuzz
  (testing "correctly fizzbuzzifies a string"
   (is (= "ok ok fizz" (fizzbuzz "ok ok ok")))))
