(ns fizzbuzz.core)

(enable-console-print!)

(defn adder
  "I add 2 numbers"
  [a b]
  (+ a b))

(defn not-adder
  "I don't add 2 numbers"
  [a b]
  (* a b))

(defn replaceWord [word, i]
  (cond
    (= 0 (% i 15)) "fizzbuzz"
    (= 0 (% i 5) "buzz"
    (= 0 (% i 3) "fizz"
    :else word))

(defn fizzbuzzUnthreaded
  "replaces string with fizzbuzz'ed version"
  [input]
  (join (map replaceWord (split input " ") " " )

(defn fizzbuzz
  "replaces string with fizzbuzz'ed version"
  [input]
  (-> input 
    (split input " ")
    (map replaceWord  " " )
    (join replaceWord  " " )))



