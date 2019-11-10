import unittest
from fizzbuzz import fizzbuzzify

class TestStringMethods(unittest.TestCase):

    def test_upper(self):
        self.assertEqual(fizzbuzzify(''), '')
        self.assertEqual(fizzbuzzify('ok'), 'ok')
        self.assertEqual(fizzbuzzify('ok ok ok'), 'ok ok fizz')
        self.assertEqual(fizzbuzzify('ok ok ok ok ok'), 'ok ok fizz ok buzz')
        self.assertEqual(fizzbuzzify('ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok'), 
        'ok ok fizz ok buzz fizz ok ok fizz buzz ok fizz ok ok fizzbuzz')

    def run_tests():
      unittest.main()