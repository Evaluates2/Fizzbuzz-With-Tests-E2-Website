(ns test.test-runner
  (:require [cljs.test :as tt]
            [fizzbuzz.core-test]))

(enable-console-print!)

(defn runner [] 
  (tt/run-tests
    (tt/empty-env ::tt/default)
    'fizzbuzz.core-test))

(defn ^:export set-print-fn! [f]
  (set! cljs.core.*print-fn* f))

