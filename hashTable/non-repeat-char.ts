/*
First Recurring Character
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
Example:

Input: s = "leetcode"
Output: 0

Input: s = "loveleetcode"
Output: 2

*/

function firstUniqChar(s: string): number {
  // Create a hash table to store character frequencies
  const charFreq: { [char: string]: number } = {};

  // Iterate through the string and count frequencies
  for (const char of s) {
    charFreq[char] = (charFreq[char] || 0) + 1;
  }

  // Iterate through the string again and find the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charFreq[char] === 1) {
      return i; // Return the index of the first non-repeating character
    }
  }

  return -1; // No non-repeating character found
}

console.log(firstUniqChar("eleetcode"));
