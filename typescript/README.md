# Evaluates2 TypeScript NodeJS Fizzbuzz Example!
Examples of writing node.js functions with units tests in TypeScript! yay!!

## Functional Vs Class-Based
Just like in the node.js project, I have an example of using an es6 class with a static method (fizzbuzz-class.ts) or an example where it's just one function exported by the file (fizzbuzz-function.js).

## Usage

1. Install dependencies (for running tests):
```
npm i
```

2. Run tests
```
npm test
```

or run tests in watch mode (nice for devloping TDD style):
```
npm run test-watch
```


## Scaffolding
For this project I pretty much copied the raw vanilla node.js example files, changed the javascript extentions to ".ts", explicitly wrote the types everywhere, and then installed and ran these extra packages:

```
npm i typescript -g
npm i ts-mocha --sav-dev
npm i @types/node --save-dev
npm i @types/mocha --save-dev
tsc --init
```

