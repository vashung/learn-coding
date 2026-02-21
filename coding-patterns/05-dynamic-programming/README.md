# Dynamic Programming Pattern

## Overview

Dynamic Programming solves complex problems by breaking them into overlapping subproblems and storing results to avoid recomputation.

## Core Principles

1. **Optimal Substructure**: Solution built from optimal solutions to subproblems
2. **Overlapping Subproblems**: Same subproblems solved multiple times
3. **Memoization**: Cache results of expensive function calls

## Approaches

### 1. Top-Down (Memoization - Recursion)
```javascript
function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
```

### 2. Bottom-Up (Tabulation - Iterative)
```javascript
function fib(n) {
  const dp = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
}
```

## When to Use

- ✅ Counting problems
- ✅ Optimization problems (max/min)
- ✅ Fibonacci variants
- ✅ Coin change
- ✅ Longest subsequence
- ✅ Knapsack problems
- ✅ Edit distance

## Time & Space Complexity

| Aspect | Typical |
|--------|---------|
| Time | O(n) to O(n²) |
| Space | O(n) memoization |

## DP Problem Categories

1. **1D DP**: Single dimension problems
   - Climbing stairs, House robber, Coin change

2. **2D DP**: Two dimension problems
   - Longest common subsequence, Min path sum

3. **String DP**: String-based problems
   - Edit distance, Distinct subsequences

4. **Tree DP**: Tree-based problems
   - House robber III, Diameter of tree

## Classic Problems

1. **Fibonacci**
2. **Coin Change**
3. **Longest Increasing Subsequence**
4. **Edit Distance**
5. **Longest Common Subsequence**
6. **Knapsack Problem**
7. **House Robber**
8. **Word Break**

## Tips

- Identify the **state** (what variables define subproblem)
- Find the **transition** (how states relate)
- Determine **base cases**
- Choose **top-down or bottom-up**
- Optimize space if possible

---

**Next**: Master DP by solving progressively harder problems
