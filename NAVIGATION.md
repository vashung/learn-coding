# 📂 Repository Navigation Guide

Complete folder structure and navigation for the learn-coding repository.

## 🗂️ Full Directory Structure

```
learn-coding/
│
├── 📖 README.md ......................... Main repository documentation
├── 📄 CONTRIBUTING.md .................. Contribution guidelines
├── 📄 LICENSE .......................... MIT License
├── 📄 NAVIGATION.md .................... This file (complete guide)
│
├── 📁 docs/
│   └── SETUP.md ........................ Environment setup & deployment guide
│
├── 📁 data-structures/ ................. Fundamental data structures
│   ├── README.md ....................... Data structures overview
│   ├── 01-arrays/
│   │   ├── README.md
│   │   └── basic-array.js
│   ├── 02-linked-lists/
│   │   └── README.md
│   └── 03-stacks-queues/
│       └── README.md
│
├── 📁 coding-patterns/ ................. Competitive programming patterns
│   ├── README.md ....................... Patterns overview & guide
│   │
│   ├── 01-two-pointers/ ............... Two pointer technique
│   │   ├── README.md ................... Pattern explanation
│   │   ├── LANGUAGE_GUIDE.md .......... Language switcher guide
│   │   ├── examples.js ................ JavaScript examples
│   │   ├── examples.py ................ Python examples
│   │   ├── examples.java .............. Java examples
│   │   ├── templates.js ............... JS templates
│   │   └── templates.py ............... Python templates (coming)
│   │
│   ├── 02-sliding-window/ ............ Sliding window pattern
│   │   ├── README.md
│   │   ├── examples.js
│   │   ├── examples.py ................ (coming)
│   │   └── examples.java .............. (coming)
│   │
│   ├── 03-binary-search/ ............ Binary search pattern
│   │   └── README.md
│   │
│   ├── 04-dfs-bfs/ .................. Graph traversal patterns
│   │   └── README.md
│   │
│   └── 05-dynamic-programming/ ...... Dynamic programming pattern
│       └── README.md
│
├── 📁 examples/ ........................ General code examples
│   └── (Organize by language/topic)
│
├── 📁 tutorials/ ....................... Step-by-step guides
│   ├── README.md ....................... Tutorials index
│   ├── arrays-101.md ................... Introduction to Arrays
│   └── (Add more tutorials)
│
├── 📁 cheat-sheets/ .................... Quick reference guides
│   ├── README.md ....................... Cheat sheets index
│   ├── array-cheatsheet.md ............ Array methods & patterns
│   └── (Add more cheat sheets)
│
└── 📁 practice-problems/ .............. Coding challenges
    ├── README.md ....................... Problems index & tracker
    ├── arrays/ ......................... Array problems
    │   ├── easy/ ....................... Easy difficulty
    │   ├── medium/ ..................... Medium difficulty
    │   └── hard/ ....................... Hard difficulty
    └── solutions/ ...................... Your solutions

```

---

## 🧭 Quick Navigation Paths

### Data Structures Learning Path

1. **Start with Arrays**
   - `/data-structures/01-arrays/README.md` - Overview
   - `/tutorials/arrays-101.md` - Detailed tutorial
   - `/cheat-sheets/array-cheatsheet.md` - Quick reference

2. **Move to Linked Lists**
   - `/data-structures/02-linked-lists/` - Coming soon

3. **Study Stacks & Queues**
   - `/data-structures/03-stacks-queues/` - Coming soon

### Competitive Programming Path

1. **Two Pointers** (START HERE)
   - `/coding-patterns/01-two-pointers/README.md` - Concepts
   - `/coding-patterns/01-two-pointers/examples.js` - JavaScript
   - `/coding-patterns/01-two-pointers/examples.py` - Python
   - `/coding-patterns/01-two-pointers/examples.java` - Java

2. **Sliding Window**
   - `/coding-patterns/02-sliding-window/README.md`
   - Examples coming soon

3. **Binary Search**
   - `/coding-patterns/03-binary-search/README.md`
   - Examples coming soon

4. **Graph Traversal (DFS & BFS)**
   - `/coding-patterns/04-dfs-bfs/README.md`
   - Examples coming soon

5. **Dynamic Programming**
   - `/coding-patterns/05-dynamic-programming/README.md`
   - Examples coming soon

---

## 📍 File Types Guide

| Symbol | Meaning |
|--------|---------|
| 📖 | Main documentation |
| 📄 | Support files (config, license) |
| 📁 | Folder/directory |
| 📊 | Data/reference materials |
| 💻 | Code files |
| 🔗 | Related links |

---

## 🎯 Popular Entry Points

### For Beginners
1. Start: `/README.md` - Understand repository
2. Setup: `/docs/SETUP.md` - Prepare environment
3. Learn: `/tutorials/arrays-101.md` - Basic concepts
4. Practice: `/practice-problems/README.md` - Build skills

### For Competitive Programming
1. Start: `/coding-patterns/README.md` - Understand patterns
2. Learn: `/coding-patterns/01-two-pointers/README.md` - Start with two pointers
3. Code: `/coding-patterns/01-two-pointers/examples.js` - See implementations
4. Master: Try all 5 patterns progressively

### For Data Structures
1. Overview: `/data-structures/README.md` - Concepts
2. Topic: `/data-structures/01-arrays/README.md` - Deep dive
3. Practice: `/practice-problems/arrays/` - Solve problems
4. Reference: `/cheat-sheets/array-cheatsheet.md` - Quick lookup

---

## 🔗 Key Files by Category

### Setup & Configuration
- `README.md` - Main entry point
- `docs/SETUP.md` - Environment setup
- `CONTRIBUTING.md` - How to contribute
- `LICENSE` - MIT License

### Learning Materials
- `data-structures/` - Fundamental DSA
- `coding-patterns/` - Interview & competitive prep
- `tutorials/` - Step-by-step guides
- `cheat-sheets/` - Quick references

### Practice & Implementation
- `examples/` - Code snippets
- `practice-problems/` - Coding challenges
- `templates/` - Reusable code templates

---

## 💾 Adding Content

### Add a New Data Structure
```bash
mkdir -p data-structures/04-new-structure
touch data-structures/04-new-structure/README.md
# Add examples, tutorials, and problems
```

### Add Examples in New Language
```bash
# For existing pattern, add new language
cp coding-patterns/01-two-pointers/examples.js \
   coding-patterns/01-two-pointers/examples.go
# Edit examples.go with Go implementations
```

### Add a New Pattern
```bash
mkdir -p coding-patterns/06-new-pattern
touch coding-patterns/06-new-pattern/README.md
# Add examples for JavaScript, Python, Java
```

### Add Practice Problems
```bash
mkdir -p practice-problems/new-topic/easy
touch practice-problems/new-topic/easy/problem-1.md
# Document problem and link to solutions
```

---

## 📊 Content Statistics

### Data Structures
- [x] Arrays (1 structure)
- [ ] Linked Lists (coming)
- [ ] Stacks & Queues (coming)

### Coding Patterns
- [x] Two Pointers (complete with JS, Python, Java)
- [x] Sliding Window (README + examples coming)
- [x] Binary Search (README + examples coming)
- [x] DFS & BFS (README + examples coming)
- [x] Dynamic Programming (README + examples coming)

### Languages Supported
- ✅ JavaScript
- ✅ Python
- ✅ Java
- 🔄 Go (coming)
- 🔄 C++ (coming)

---

## 🚀 Getting Started

1. **Read** the main `README.md`
2. **Choose** a learning path (beginner/competitive/data structures)
3. **Follow** the navigation paths above
4. **Write** code in your preferred language
5. **Practice** with the problems
6. **Contribute** improvements back

---

**Last Updated**: 21 February 2026
