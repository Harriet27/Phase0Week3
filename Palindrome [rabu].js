//palindrome [rabu]
function palindrome(kata) {
  var output = kata.split("").reverse().join("");
  if (kata == output) {
    console.log(true);
  } else {
    console.log(false);
  }
}

console.log(palindrome("katak"))
console.log(palindrome("blanket"))
console.log(palindrome("civic"))
console.log(palindrome("kasur rusak"))
console.log(palindrome("mister"))