/*
Isomorphic Strings
Given two strings s and t, determine if they are isomorphic. Two strings are isomorphic if the characters in s can be replaced to get t.
Example:

Input: s = "egg", t = "add"
Output: true

Input: s = "foo", t = "bar"
Output: false

Input: s = "paper", t = "title"
Output: true
Explanation: 'p' can be replaced with 't', 'a' with 'i', 'e' with 'l', and 'r' with 'e'.

Input: s = "foo", t = "bar"
Output: false
Explanation: 'f' cannot be mapped to 'b' because 'o' and 'o' should have the same mapping.

Input: s = "badc", t = "baba"
Output: false
Explanation: 'c' cannot be mapped to anything because 'a' and 'a' have different mappings.

Input: s = "abab", t = "baba"
Output: true
Explanation: 'a' can be mapped to 'b', and 'b' can be mapped to 'a'.

Input: s = "abc", t = "def"
Output: true
Explanation: 'a' can be mapped to 'd', 'b' to 'e', and 'c' to 'f'.

Input: s = "abca", t = "zbxz"
Output: true
Explanation: 'a' can be mapped to 'z', 'b' to 'b', 'c' to 'x', and 'a' to 'z' again.

*/

function isomorphic(first: string, second: string): boolean {
  if(first.length !== second.length) {
    return false;
  }

  let charMap: {[key: string]: string} = {}
  let charMapSecond: {[key: string]: string} = {}

  for(let i = 0; i < first.length; i++) {
    if((charMap[first[i]] && charMap[first[i]] !== second[i]) || (charMapSecond[second[i]] && charMapSecond[second[i]] !== first[i])) {
      return false;
    }
    charMap[first[i]] = second[i];
    charMapSecond[second[i]] = first[i]
  }
  return true;
}

console.log(isomorphic("abab", "baba"))
