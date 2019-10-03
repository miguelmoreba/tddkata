This is a TDD Kata exercise.

The goal of TDD (Test Driven Development) is to write only the production test that makes a new test pass.
Every change in the production code should be driven by a new test case previously written.
With this approach, we try to capture as many test cases as we can before writing our implementation.

This "baby step" approach is encouraged in some companies to avoid polluting code with unnecessary/untested behavior, so the production code can be kept clean, maintainable and documented with tests.

For this kata, we will use the following approach:

Write a failing test, documenting a behavior you expect from your code but is not yet implemented

The next person will write the code to make that test pass (should be a very incremental change)

Once it passes, they might refactor some of the code

That person writes the next failing test

Extra rules:
- If the test you write passes without any code change, you must write another one
- You can google/search/discuss whatever you want
- Cooperation is welcomed
- Code shaming is not welcomed (well, only if you are polite about it)


Given a delimited string (e.g. "1, 2")
The goal is to write a function / class method that takes a delimited string (e.g. "1, 2", "5  // 7 // 2", "25 \n 98") as a parameter and returns the sum of the values.

The requirements for this project are:

- The returned value must be of type number.
- If an empty string is passes, the method returns 0
- If a single number (always as a string) is passed, return the value
- There should be three delimiters supported: "," "//" and "\n"
- Negative numbers are not allowed (maybe throw an exception)
- Numbers bigger than 1000 should be ignored (e.g. 2 + 1001 should return 2)

Extensions:

- Add a new method / function that allows the user to add custom delimiters

- Add an optional parameter to the sum method/function that takes a number as a string.
If this parameter is passed, the function should return the sum of the numbers in the first parameter minus the number in the second parameter.
(For this particular case, be careful not to break any previous tests).

