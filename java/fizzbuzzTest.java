import org.junit.*;
import static org.junit.Assert.*;
import junit.runner.Version;
import org.junit.*;
import org.junit.runner.*;
import java.lang.*;
import java.util.*;

public class FizzbuzzTest {

    public FizzbuzzTest() {
    }

    @Test
    public void testFizzbuzz() {
        assertEquals("", Fizzbuzz.fizzbuzzify(""));
        assertEquals("ok", Fizzbuzz.fizzbuzzify("ok"));
        assertEquals("ok ok fizz", Fizzbuzz.fizzbuzzify("ok ok ok"));
        assertEquals("ok ok fizz ok buzz", Fizzbuzz.fizzbuzzify("ok ok ok ok ok"));
        assertEquals("ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz",
                Fizzbuzz.fizzbuzzify("ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok"));
    }
}
