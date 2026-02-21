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
   - `/coding-patterns/01-two-pointers/README.md` - **Toggleable examples** in JS/Python/Java
   - Click sections to expand your language
   - [Full reference implementations](./coding-patterns/01-two-pointers/examples.js)

2. **Sliding Window**
   - `/coding-patterns/02-sliding-window/README.md` - **Toggleable examples** (coming)

3. **Binary Search**
   - `/coding-patterns/03-binary-search/README.md` - **Toggleable examples** (coming)

4. **Graph Traversal (DFS & BFS)**
   - `/coding-patterns/04-dfs-bfs/README.md` - **Toggleable examples** (coming)

5. **Dynamic Programming**
   - `/coding-patterns/05-dynamic-programming/README.md` - **Toggleable examples** (coming)

---

## 🌍 Multi-Language Support

### How It Works

Each pattern's **README.md** contains **interactive code examples** with language toggles:
- JavaScript 🔤
- Python 🐍
- Java ☕

**Simply click to expand your preferred language and see the code!**

### Reference Implementations

For deep study, full reference files are available:
- `examples.js` - Complete JavaScript implementation
- `examples.py` - Complete Python implementation  
- `examples.java` - Complete Java implementation

All solve the same problems to help you compare language approaches.

### Example: Two Pointers Pattern

1. Open [README.md](./coding-patterns/01-two-pointers/README.md)
2. See the language toggles at the top
3. Click JavaScript, Python, or Java to expand
4. View code examples right on the page
5. Click links for full reference implementations

**No need to navigate between files - see all languages in one place!**

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

### Add a New Pattern

1. Create the pattern folder:
   ```bash
   mkdir -p coding-patterns/06-new-pattern
   touch coding-patterns/06-new-pattern/README.md
   ```

2. In **README.md**, add toggleable language sections:
   ```markdown
   ## 🌐 Choose Your Language
   
   <details>
   <summary><strong>JavaScript</strong> 🔤</summary>
   
   ### JavaScript Implementation
   \`\`\`javascript
   // Your JavaScript code here
   \`\`\`
   </details>
   
   <details>
   <summary><strong>Python</strong> 🐍</summary>
   
   ### Python Implementation
   \`\`\`python
   # Your Python code here
   \`\`\`
   </details>
   
   <details>
   <summary><strong>Java</strong> ☕</summary>
   
   ### Java Implementation
   \`\`\`java
   // Your Java code here
   \`\`\`
   </details>
   ```

3. Optionally add full reference files:
   - `examples.js` - Complete JavaScript
   - `examples.py` - Complete Python
   - `examples.java` - Complete Java

4. Update `INDEX.md` with your new pattern

### Update Existing Patterns

To add more examples to Two Pointers or other patterns:

1. Edit the pattern's **README.md**
2. Add more `<details>` sections for each language
3. Show code snippets with toggles
4. Link to full reference files if available

### Keep It Simple

- **Page sections** = Quick learning (toggleable view)
- **Reference files** = Deep study (full implementations)
- **Users see what they need** on the main page!

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
