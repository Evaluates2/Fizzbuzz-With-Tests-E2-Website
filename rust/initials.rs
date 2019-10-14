

fn fizz_buzz(i: i32) -> Term {
    if i % 15 == 0 {
        Term::FizzBuzz
    } else if i % 5 == 0 {
        Term::Buzz
    } else if i % 3 == 0 {
        Term::Fizz
    } else {
        Term::Number(i)
    }
}


