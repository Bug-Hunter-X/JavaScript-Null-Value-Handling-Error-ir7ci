# JavaScript Null Value Handling

This repository demonstrates a common error in JavaScript: improper handling of null values. The `bug.js` file shows the incorrect code that doesn't handle null values. `bugSolution.js` provides the corrected version. The issue highlights the importance of defensive programming when dealing with potentially null values in JavaScript.

## Bug
The original code adds two numbers, but it fails to handle cases where one or both inputs are null. This results in unexpected behavior.

## Solution
The solution explicitly checks for null values using strict equality (`===`). If either input is null, the function returns 0, providing a more predictable and error-resistant outcome. This demonstrates the best practice of handling potential null or undefined values to prevent unexpected program behavior.