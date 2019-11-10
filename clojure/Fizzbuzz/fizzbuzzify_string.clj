(ns Fizzbuzz.fizzbuzzify_string)
(use '[clojure.string :only (join split)])

(defn- fizzbuzzifyList
  [words]
  (for [[i word] (map-indexed vector words)]
    (cond
      (= 0 (mod (+ i 1) 15)) "fizzbuzz"
      (= 0 (mod (+ i 1) 5)) "buzz"
      (= 0 (mod (+ i 1) 3)) "fizz"
      :else word)))

(defn fizzbuzzify
 " Takes a string and returns a “fizzbuzzified” version of the string where 
   every 3rd word is “fizz” and every 5th word is “buzz”, except every 15th 
   word is “fizzbuzz”."
  [input]
  (->> (split input #"\s")
       (fizzbuzzifyList)
       (join " ")))

