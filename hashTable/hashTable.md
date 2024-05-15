# Hash Table Cheat Sheet

## Overview

- Hash tables are data structures that provide fast insertion, deletion, and lookup operations.
- They use hash functions to map keys to indices in an array (or buckets).
- Collisions can occur when different keys map to the same index, requiring a collision resolution strategy.

## Time Complexities

- Average Case:
  - Insertion: O(1)
  - Deletion: O(1)
  - Search: O(1)
- Worst Case (with collisions):
  - Insertion: O(n)
  - Deletion: O(n)
  - Search: O(n)

## Advantages

- Fast lookup, insertion, and deletion (on average).
- Flexible keys (not limited to integers like arrays).
- Good for optimizing nested loops and improving time complexity.

## Disadvantages

- Unordered data structure.
- Slow key iteration (need to traverse entire memory space).
- Extra memory usage for storing keys and values.

## Trade-offs

- Time vs. Space: Hash tables use more memory to achieve faster access times.
- Collisions: Proper collision resolution (e.g., linked lists) is needed to maintain performance.

## Common Usages

- Caching and memoization.
- Counting frequencies and occurrences.
- Implementing associative arrays or dictionaries.
- Optimizing nested loops and improving time complexity.

## Interview Tips

- Hash tables are commonly used in interviews to optimize time complexity.
- Be familiar with identifying scenarios where hash tables can be used to improve nested loop performance.
- Understand the trade-offs between time and space complexities when using hash tables.
