# Setup Guide

## Environment Setup

### macOS

1. **Install Git**
   ```bash
   brew install git
   ```

2. **Configure Git**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. **Generate SSH Key** (recommended for GitHub)
   ```bash
   ssh-keygen -t ed25519 -C "your.email@example.com"
   ```
   Then add the public key to your GitHub account.

### Windows

1. **Install Git for Windows** from https://git-scm.com/download/win

2. **Configure Git** (use Git Bash)
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

### Linux

```bash
sudo apt-get install git  # Debian/Ubuntu
sudo yum install git      # RedHat/CentOS
```

## GitHub Setup

1. **Create a GitHub Account** at https://github.com

2. **Create a Repository** 
   - Click "New Repository"
   - Name: `learn-coding`
   - Choose "Public" for GitHub Pages
   - Initialize with README (optional)

3. **Clone Your Repository**
   ```bash
   git clone https://github.com/yourusername/learn-coding.git
   cd learn-coding
   ```

## GitHub Pages Setup

To make your documentation accessible via a web URL:

1. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: `main` branch
   - Folder: `/ (root)` or `/docs` if you prefer
   - Click Save

2. **Your site will be available at:**
   ```
   https://yourusername.github.io/learn-coding
   ```

## Using git.io for Short URLs

`git.io` is GitHub's URL shortener. Create short, memorable links for your repository:

### Creating a Short URL

```bash
curl -i https://git.io -d "url=https://github.com/yourusername/learn-coding" -d "code=learn-coding"
```

### Example Shortened URLs

- Full: `https://github.com/yourusername/learn-coding`
- Short: `https://git.io/learn-coding`

### Tips for git.io

- **Custom codes**: Use descriptive codes (e.g., `learn-coding`, `js-101`)
- **Remember it**: Short URLs are easier to share and remember
- **No parameters**: git.io trims URL parameters beyond the `/` after the domain
- **No auth needed**: Anyone can create a git.io redirect

### Share Your Repository

Once set up, share these links:
- **Repository**: `https://git.io/learn-coding`
- **GitHub Pages**: `https://yourusername.github.io/learn-coding`

## Quick Commands Reference

```bash
# Initialize your local repository
git init

# Clone a repository
git clone <repository-url>

# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout branch-name

# Merge branch into main
git merge feature-name
```

## Troubleshooting

### Authentication Issues
- Use SSH keys instead of HTTPS for authentication
- Generate SSH keys: `ssh-keygen -t ed25519`
- Add public key to GitHub: Settings → SSH and GPG keys

### Push Rejected
- Pull latest changes first: `git pull origin main`
- Resolve any conflicts
- Then push: `git push origin main`

### Need Help?
- Check [GitHub Docs](https://docs.github.com)
- See the main [README.md](../README.md)
- Create an issue in your repository

