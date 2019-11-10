import org.junit.*;
import static org.junit.Assert.*;
import junit.runner.Version;
import org.junit.*;
import org.junit.runner.*;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import java.lang.*;
import java.util.*;

public class Main {

  public static void main (String[] args) {
    System.err.println("Running junit tests...");
    System.err.println("JUnit version is: " + Version.id());
    org.junit.runner.JUnitCore.main("FizzbuzzTest");
  }
  
}