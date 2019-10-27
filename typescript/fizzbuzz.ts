
export default class Fizzbuzz {
  
  static fizzbuzz(inputString: string): string {
    
    return inputString
      .split(" ")
      .filter(item => item !== "")
      .map((word, i) => {
        if ((i + 1) % 15 === 0) return "fizzbuzz";
        if ((i + 1) % 5 === 0) return "buzz";
        if ((i + 1) % 3 === 0) return "fizz";
        return word;
      })
      .join(" ");
  };
  
}
