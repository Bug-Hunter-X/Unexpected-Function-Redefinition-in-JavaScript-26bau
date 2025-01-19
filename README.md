# JavaScript Function Redefinition Bug
This repository demonstrates a common JavaScript bug caused by redefining functions without proper scoping or awareness of hoisting.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Description
JavaScript's flexible nature can sometimes lead to unintended consequences when functions are redefined. In this specific example, the function `foo` is declared twice with different implementations, leading to an unexpected output and potential runtime errors in a larger application.

## How to Reproduce
1. Clone this repository.
2. Run `bug.js` using a JavaScript interpreter (e.g., Node.js).
3. Observe the unexpected output and understand how the redefinition affects the function's behavior.

## Solution
The `bugSolution.js` file offers a corrected version.  It uses proper function scoping to prevent accidental overwriting and ensures the intended behavior is maintained.  Always be mindful of function names and scopes to avoid these kinds of errors.
