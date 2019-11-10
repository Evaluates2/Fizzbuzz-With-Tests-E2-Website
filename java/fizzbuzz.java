import java.lang.*;
import java.util.*;

public class Fizzbuzz {
    public static int iterator;
    public static String fizzbuzzify(String inputString) {

        Fizzbuzz.iterator = 0;
        String[] words = inputString.split("\\s+");
        String[] fizzbuzzifiedWords = Arrays.stream(words).map(word -> {
            Fizzbuzz.iterator = Fizzbuzz.iterator + 1;

            if ((Fizzbuzz.iterator % 15) == 0) {
                return "fizzbuzz";
            }
            if ((Fizzbuzz.iterator % 3) == 0) {
                return "fizz";
            }
            if ((Fizzbuzz.iterator % 5) == 0) {
                return "buzz";
            }

            return word;
        }).toArray(String[]::new);

        return String.join(" ", fizzbuzzifiedWords);
    }
}