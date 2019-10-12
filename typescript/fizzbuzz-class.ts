export class FizzBuzz {
  fizzbuzzify(input: String) {
    return input
      .split(" ")
      .filter(item => item !== "")
      .map((word, i) => {
        if ((i + 1) % 15 === 0) return "fizzbuzz";
        if ((i + 1) % 5 === 0) return "buzz";
        if ((i + 1) % 3 === 0) return "fizz";
        return word;
      })
      .join(" ");
  }
}


