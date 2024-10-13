function div(a, b) {
  return a / b;
}

function containsNumbers(text) {
  return /\d/.test(text); // Regular expression to check for digits
}


// Export the functions
exports.div = div;
exports.containsNumbers = containsNumbers;
