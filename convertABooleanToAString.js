// Implement a function which convert the given boolean value into its string representation.

// Using the toString() method
function booleanToString(b) {
  return b.toString();
}

// Adding parameter directly to string
function booleanToString(b) {
  return b + "";
}

// Using string template literal
function booleanToString(b) {
  return `${b}`;
}

// Using ternary operators
function booleanToString(b) {
  return b ? "true" : "false";
}

// Using simple if statement
function booleanToString(b) {
  if (b) {
    return "true";
  }
  return "false";
}
