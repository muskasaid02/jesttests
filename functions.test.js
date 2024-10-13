const myFunctions = require('./functions');

// Test cases for div function
test('div should return the correct quotient for positive numbers', () => {
  expect(myFunctions.div(6, 3)).toBe(2);
});

test('div should return the correct quotient for negative numbers', () => {
  expect(myFunctions.div(-6, -3)).toBe(2);
});

test('div should handle division by negative numbers', () => {
  expect(myFunctions.div(6, -3)).toBe(-2);
});

test('div should handle division by zero', () => {
  expect(myFunctions.div(6, 0)).toBe(Infinity);
});


// Test cases for containsNumbers function
test('containsNumbers should return true when the string contains numbers', () => {
  expect(myFunctions.containsNumbers("abc123")).toBe(true);
});

test('containsNumbers should return false when the string contains no numbers', () => {
  expect(myFunctions.containsNumbers("abcdef")).toBe(false);
});

test('containsNumbers should return true when the string contains a single digit', () => {
  expect(myFunctions.containsNumbers("a1b")).toBe(true);
});

test('containsNumbers should return false for an empty string', () => {
  expect(myFunctions.containsNumbers("")).toBe(false);
});

test('containsNumbers should return false when the string contains spaces', () => {
  expect(myFunctions.containsNumbers("abc ")).toBe(false);
});

test('containsNumbers should return false when the string contains symbols', () => {
  expect(myFunctions.containsNumbers("@#$")).toBe(false);
});

