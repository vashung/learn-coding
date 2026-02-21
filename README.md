# 📚 Learn Coding

A comprehensive learning resource repository for aspiring developers. This repository contains coding tutorials, examples, best practices, and learning materials organized by programming concepts and languages.

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Last Updated](https://img.shields.io/badge/last%20updated-2026-brightgreen)]()

---

## 🗺️ Quick Navigation

**New Here?** Start with one of these:
- 📖 [**Complete Folder Guide**](./NAVIGATION.md) - See entire repo structure
- 🚀 [**Quick Start Guide**](./docs/SETUP.md) - Set up your environment  
- 🎓 [**Learning Paths**](#learning-paths) - Choose your starting point below

**Categories:**
| [Data Structures](#data-structures) | [Coding Patterns](#-competitive-programming-patterns) | [Tutorials](./tutorials/arrays-101.md) | [Cheat Sheets](./cheat-sheets/) | [Practice Problems](./practice-problems/) |

---

- [About](#about)
- [Quick Start](#quick-start)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Learning Paths](#learning-paths)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## About

This repository is designed to help learners understand coding concepts through practical examples and well-documented code. Whether you're a beginner just starting your coding journey or someone looking to expand your skills, you'll find valuable resources here.

### Key Features

- 📝 Well-commented code examples
- 🎯 Progressive difficulty levels
- 🔗 Clear learning paths
- 💡 Best practices and patterns
- 🚀 Quick reference guides

## Quick Start

```bash
# Clone this repository
git clone https://github.com/yourusername/learn-coding.git

# Navigate to the directory
cd learn-coding

# Start exploring the content
ls -la
```

## Repository Structure

```
learn-coding/
├── README.md                    # This file
├── LICENSE                      # MIT License
├── CONTRIBUTING.md              # Contributing guidelines
├── docs/
│   └── SETUP.md                 # Setup and deployment guides
├── data-structures/             # Data structures learning path
│   ├── README.md               # Overview
│   ├── 01-arrays/              # Arrays topic
│   │   ├── README.md
│   │   ├── basic-array.js      # Code examples
│   │   └── ...
│   ├── 02-linked-lists/
│   └── 03-stacks-queues/
├── coding-patterns/             # Competitive programming patterns
│   ├── README.md               # Pattern overview
│   ├── 01-two-pointers/        # Two pointer pattern
│   │   ├── README.md
│   │   ├── examples.js
│   │   └── templates.js
│   ├── 02-sliding-window/      # Sliding window pattern
│   ├── 03-binary-search/       # Binary search pattern
│   ├── 04-dfs-bfs/             # Graph traversal patterns
│   └── 05-dynamic-programming/ # DP pattern
├── examples/                    # General code examples
├── tutorials/                   # Step-by-step guides
│   └── arrays-101.md           # Tutorial: Introduction to Arrays
├── cheat-sheets/               # Quick reference guides
│   └── array-cheatsheet.md     # Array methods & patterns
└── practice-problems/          # Problems to solve
    └── README.md               # Problem list
```

## Getting Started

### Prerequisites

Before you start, make sure you have:
- A code editor (VS Code, Sublime Text, etc.)
- Git installed on your machine
- Basic command line knowledge

### Installation

1. Fork the repository (optional, for contributing)
2. Clone to your local machine:
   ```bash
   git clone https://github.com/yourusername/learn-coding.git
   cd learn-coding
   ```

3. Create a branch for your work:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Learning Paths

Choose a learning path based on your current level and interests:

### Beginner
- Core programming concepts
- Data types and variables
- Control flow (if/else, loops)
- Functions and scope

### Intermediate
- Object-oriented programming
- Functional programming
- Design patterns
- Error handling

### Advanced
- Advanced algorithms
- System design
- Performance optimization
- Architecture patterns

## 🏆 Competitive Programming Patterns

Master essential coding patterns used in technical interviews and coding competitions.

### Available Patterns

**[View All Patterns →](./coding-patterns)**

1. **Two Pointers** - Solve array/string problems with dual traversal
2. **Sliding Window** - Find optimal subarrays/substrings efficiently
3. **Binary Search** - Divide and conquer sorted data in O(log n)
4. **DFS & BFS** - Graph and tree traversal techniques
5. **Dynamic Programming** - Solve overlapping subproblems optimally

### Why Learn Patterns?

- 🎯 **Recognize** problem types quickly
- ⚡ **Apply** proven solutions efficiently
- 🚀 **Interview ready** for technical assessments
- 💪 **Competitive programming** prepared
- 🧠 **Build muscle memory** through practice

### Getting Started with Patterns

1. Pick a pattern (start with Two Pointers or Sliding Window)
2. Understand the concepts and key ideas
3. Study the provided examples and templates
4. Solve the easy practice problems first
5. Progress to medium and hard difficulties
6. Implement solutions from scratch

### Pattern Learning Timeline

- **Week 1-2**: Two Pointers + Sliding Window
- **Week 3**: Binary Search
- **Week 4-5**: DFS & BFS
- **Week 6+**: Dynamic Programming (complex!)

## 📁 How to Organize Content by Folder

This repository uses a structured organization system:

### Data Structures Folder
For learning specific data structure topics:
```
data-structures/
├── 01-arrays/              # Each topic in numerical order
├── 02-linked-lists/
├── 03-stacks-queues/
└── Each folder contains: README.md + code examples
```

**How to add content to a topic:**
1. Create a numbered folder: `01-topic-name/`
2. Add a `README.md` with an overview
3. Add code examples (e.g., `basic-array.js`)

Example structure for arrays:
```
01-arrays/
├── README.md               # Overview and concepts
├── basic-array.js          # Fundamental operations
├── array-methods.js        # Common methods
└── array-algorithms.js     # Algorithms (sort, search, etc.)
```

### Examples Folder
General code examples organized by language/topic:
```
examples/
├── javascript/             # Language-specific examples
│   ├── loops.js
│   ├── functions.js
│   └── async.js
├── python/
│   └── basic.py
└── README.md               # Index of all examples
```

### Tutorials Folder
Step-by-step learning guides:
```
tutorials/
├── arrays-101.md           # Complete beginners guide
├── linked-lists-guide.md   # Detailed walkthrough
├── js-fundamentals.md      # Language fundamentals
└── README.md               # Index of all tutorials
```

### Cheat Sheets Folder
Quick reference materials:
```
cheat-sheets/
├── array-cheatsheet.md     # Quick methods & patterns
├── js-syntax.md            # Language syntax quick ref
├── git-commands.md         # Git command reference
└── README.md               # Index
```

### Practice Problems Folder
Coding challenges to solve:
```
practice-problems/
├── arrays/                 # Organized by topic
│   ├── easy/
│   │   ├── reverse-array.md
│   │   └── max-element.md
│   ├── medium/
│   └── hard/
├── solutions/              # Your solutions
│   └── arrays/
└── README.md               # Problem index
```

## 📝 Adding New Content

### Creating a New Topic

1. **Add to Data Structures:**
   ```bash
   mkdir data-structures/04-topic-name
   cd data-structures/04-topic-name
   touch README.md example.js
   ```

2. **Create the README with:**
   - Topic overview
   - Key concepts
   - Time/space complexity
   - Links to examples and tutorials

3. **Add code examples** with comments

4. **Update main README** with link to new topic

### Creating a New Tutorial

1. Create file: `tutorials/topic-guide.md`
2. Write step-by-step guide with examples
3. Include "Key Takeaways" section
4. Link to related examples

### Creating Practice Problems

1. Create: `practice-problems/topic/difficulty/problem-name.md`
2. Include:
   - Problem description
   - Input/output examples
   - Constraints
   - Hints
3. Add solution (optional): `solutions/topic/problem-name.md`

### Example Content File Structure

**README Files** should include:
- Overview/description
- Key concepts
- Code examples
- Time complexity
- Practice problems

**Code Files** should include:
- Clear comments
- Multiple examples
- Edge cases
- Explanation of output

**Tutorial Files** should include:
- Introduction
- Step-by-step explanations
- Code examples
- Visual diagrams (if helpful)
- Key takeaways
- Links to related content

## Contributing

We welcome contributions! Here's how you can help:

1. **Report Issues**: Found a bug? Open an issue on GitHub
2. **Suggest Improvements**: Have an idea? Let us know!
3. **Add Content**: Follow the [CONTRIBUTING.md](CONTRIBUTING.md) guidelines

### Contribution Guidelines

- Ensure code is well-commented
- Follow existing code style
- Write clear commit messages
- Test your examples before submitting
- Update documentation as needed

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📧 Questions? Open an issue
- 💬 Discussions welcome in GitHub Discussions
- 🐛 Found a bug? Report it here

---

**Last Updated**: 21 February 2026

**Status**: Active Development ✨


