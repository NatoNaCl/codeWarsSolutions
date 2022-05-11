// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30

// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  return Math.floor((s * Math.pow(10, 3)) / 36);
}

// More straightforward answer using constants
function cockroachSpeed(s) {
  const centimetersInKilometers = 100000;
  const secondsInHour = 3600;

  return Math.floor((s * centimetersInKilometers) / secondsInHour);
}

// More concise version knowing that:
// 1 km = 100000 cm
// 1 hr = 3600 seconds
const cockroachSpeed = (s) => Math.floor((s * 100000) / 3600);
