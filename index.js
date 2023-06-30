function isPalindrome(word) {
  
  // Write your algorithm here
 
   let reversed=word.split("").reverse().join("")
   return reversed === word
}

console.log(isPalindrome("racecar"))
/* 
  Add your pseudocode here
  Take a temporary variable that holds the string in this case word.
  Reverse the given string.
  If the temporary and original string are the same ,the string is a palindrome
  Else given string is not a palindrome.

*/

/*
  Add written explanation of your solution here
  This code will split the word into an array of characters using .split(""), reverse the array using .reverse(), and then join the characters back together using .join(""). Finally, it compares the reversed word with the original word and prints true if they are equal (i.e., it's a palindrome) or false if they are not (i.e., it's not a palindrome).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
