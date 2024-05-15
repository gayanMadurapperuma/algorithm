/*
    ==> GOOGLE QUESTION <==

Given and Array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
It should return 2 as first recurring chcarctor

*/

function findFirstRecurringChar(arr: number[]): number | null {
  const charMap: { [key: number]: boolean } = {};

  for (const char of arr) {
    if (charMap[char]) {
      return char;
    }

    charMap[char] = true;
  }

  return null; // No recurring character found
}

const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const firstRecurringChar = findFirstRecurringChar(arr);
console.log(firstRecurringChar); // Output: 2
