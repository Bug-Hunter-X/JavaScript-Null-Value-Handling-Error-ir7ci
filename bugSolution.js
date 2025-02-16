function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Handle null or non-number values
  }
  return a + b; // Perform addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));    // Output: 10
console.log(foo('abc', 5)); // Output: 0
console.log(foo(5, 'abc')); // Output: 0