# Fizzbuzz With Tests E2 Website
This repo containts the executable source code for the fizzbuzz example on the engineering page of evaluates2.com for the various programming languages!

## What Is "Fizzbuzz"?
There are many different variations of the fizzbuzz challenge. For this one in particular we are saying that "fizzbuzz" is the name of the function which takes a string of arbitrary size as it's input and returns the same string but with a few modifications- every third word is replaced with "fizz", every fifth word is replaced with "buzz", and every fifteenth word if replaced with "fizzbuzz".

## What's In Each Folder Here?
Each folder represents one programming language. In that folder there many be one or more implementations of the fizzbuzz problem in that language. 

## We Can Hit The Ground Running In Any Language
The truth is that deciding on frameworks, setting up your tooling, and learning the testing conventions for each new language can be pretty difficult. The main purpose of these repos is to provide a set up examples to quickly get developers into a TDD right off the path and without having to wasting a lot of time with tooling differences when frequently switching between languages. The folder for each language contains a project, which consits of:

- a function named "fizzbuzz" that takes a string and returns a "fizzbuzzifies string" (see "What Is "Fizzbuzz" section above for details)
- a unit test file that verifies the output of the fizzbuzz function when passes the "benchmark input strings".
- a command to execute the tests and to execute them in "watch mode" (automatically re-running tests when code is changed).

## System Setup Guides
Each language will have specific things that need to be installed on the local sytem in order to run and compile that type of code, work with depencencies, etc. For each language we try to provide the easiest and most straightforward way possible for getting the necessary things to begin development and run the fizzbuzz code.

## From-Scratch Guides
The From-Scratch Guide walks through how you could re-create the project from scratch, ie. a completely empty project directory.

## Things This Repo Does NOT Cover

- IDE Setup: For most languages either vscode, intellij, or vim will work for you.
- Basic Languages Features
- Windows Setup (😛)
