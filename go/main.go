package main

import (
	"flag"
	"testing"
)

func Test1(t *testing.T) {
	if fizzbuzzify("") != "" {
    t.Errorf(fizzbuzzify("") + " is not equal to ")
	}
	
  if fizzbuzzify("ok") != "ok" {
    t.Errorf(fizzbuzzify("ok") + " is not equal to ok")
	}

  if fizzbuzzify("ok ok ok") != "ok ok fizz" {
    t.Errorf(fizzbuzzify("ok ok ok") + " is not equal to ok ok fizz")
	}

  if fizzbuzzify("ok ok ok ok ok") != "ok ok fizz ok buzz" {
    t.Errorf(fizzbuzzify("ok ok ok ok ok") + " is not equal to ok ok fizz ok buzz")
	}

  if fizzbuzzify("ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok") != "ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz" {
    t.Errorf(fizzbuzzify("ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok") + " is not equal to ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz")
	}
    
}

func main() {
	flag.Set("test.v", "true")
	testing.Main(func(pat, str string) (bool, error) { return true, nil },
		[]testing.InternalTest{{"Test1String", Test1}},
		[]testing.InternalBenchmark{},
		[]testing.InternalExample{})
}
