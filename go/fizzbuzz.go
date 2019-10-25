package main
import (
  "strings"
)

func fizzbuzzify(inputString string) string {
  var words []string = strings.Fields(inputString)
  for i := 0;  i < len(words); i++ {
      words[i] = fizzbuzzifyWord(i, words[i])
  }
  var fizzbuzzifiedStrings string = strings.Join(words," ")
  return fizzbuzzifiedStrings
}

func fizzbuzzifyWord(i int, word string) string {
    if (i+1) % 15 == 0 {
      return "fizzbuzz"
    }
    if (i+1) % 5 == 0 {
      return "buzz"
    }
    if (i+1) % 3 == 0 {
      return "fizz"
    }
    return word
}