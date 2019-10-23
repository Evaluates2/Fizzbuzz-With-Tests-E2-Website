(ns e2.fizzbuzz)
(use '[clojure.string :only (join split)])

(defn fizzbuzzifyWords
  "Takes a list of words, loops through them, and returns a fizzbuzzified list."
  [words]
  (for [[i word] (map-indexed vector words)]
    (cond
      (= 0 (mod (+ i 1) 15)) "fizzbuzz"
      (= 0 (mod (+ i 1) 5)) "buzz"
      (= 0 (mod (+ i 1) 3)) "fizz"
      :else word)))

(defn fizzbuzz
  "Takes a string and returns a fizzbuzzified string."
  [input]
  (->> (split input #"\s")
       (fizzbuzzifyWords)
       (join " ")))
