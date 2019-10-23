pub fn fizzbuzzify(input_string: &str) -> String {
    let words: Vec<&str> = input_string.split_whitespace().collect();
    let mut fizzbuzzified_words: Vec<&str> = Vec::new();

    for (i, word) in words.iter().enumerate() {
      fizzbuzzified_words.push(fizzbuzzify_word(i, word));
    }

    return fizzbuzzified_words.join(" ");
}

fn fizzbuzzify_word(i: usize, word: &str) -> &str {

  if (i+1) % 15 == 0 {
    return "fizzbuzz"
  }
  if (i+1) % 3 == 0 {
    return "fizz"
  }
  if (i+1) % 5 == 0 {
    return "buzz"
  }

  word
}