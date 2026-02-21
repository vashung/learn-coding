# DFS & BFS Pattern

## Overview

Depth-First Search (DFS) and Breadth-First Search (BFS) are fundamental graph/tree traversal algorithms used to explore nodes systematically.

## DFS (Depth-First Search)

### Characteristics
- Explores deep before going wide
- Uses **stack** (or recursion)
- Good for: detecting cycles, topological sort, backtracking

### Implementation
```javascript
function dfs(node, visited = new Set()) {
  visited.add(node);
  console.log(node);
  
  for (const neighbor of node.neighbors) {
    if (!visited.has(neighbor)) {
      dfs(neighbor, visited);
    }
  }
}
```

## BFS (Breadth-First Search)

### Characteristics
- Explores level by level
- Uses **queue**
- Good for: shortest path, level-order traversal

### Implementation
```javascript
function bfs(start) {
  const visited = new Set([start]);
  const queue = [start];
  
  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);
    
    for (const neighbor of node.neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
```

## When to Use

### DFS Best For
- ✅ All paths/combinations
- ✅ Cycle detection
- ✅ Topological sort
- ✅ Backtracking
- ✅ Connected components

### BFS Best For
- ✅ Shortest path
- ✅ Level-order traversal
- ✅ Bipartite checking
- ✅ Nearest neighbor problems
- ✅ Word ladder/transformation

## Time & Space Complexity

| Aspect | Complexity |
|--------|-----------|
| Time | O(V + E) |
| Space | O(V) |

(V = vertices, E = edges)

## Classic Problems

1. **Number of Islands**
2. **Clone Graph**
3. **Surrounded Regions**
4. **Word Ladder**
5. **Course Schedule (Topological Sort)**

---

**Next**: Practice DFS and BFS on trees and graphs
