// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
  // return s.replace(/!/gi, "");
}

//The /g flag is a global search.
//The /gi flag is a case-insensitive search so upper or lower do not matter.
