//

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

// Using conditional (ternary) operator
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// Alternatives to the if-then statements
const even_or_odd = (number) => (number % 2 ? "Odd" : "Even");

const even_or_odd = (number) => (number % 2 === 0 ? "Even" : "Odd");
