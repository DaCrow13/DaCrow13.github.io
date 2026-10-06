# Lorenzo Abatescianni – Personal Academic Website

Source code for my personal academic website, hosted on GitHub Pages:  
https://dacrow13.github.io/

Built with static HTML, CSS, and JavaScript. No build tools, frameworks, or package managers required.

## Overview

- **Affiliation**: Ph.D. Student at the Computational Intelligence Laboratory (CILAB), University of Bari Aldo Moro.
- **Content**: Academic bio, research interests, publications/theses, and education history.
- **Theme**: Light and dark mode support with persistent preference.

## Project Structure

```text
.
├── index.html        # Main webpage
├── README.md         # Repository documentation
└── assets/
    ├── css/          # Base styling and publication layout
    ├── js/           # Theme toggle, news expander, BibTeX copy handlers
    ├── img/          # Diagrams, profile picture, favicons
    └── files/        # Downloadable attachments
```

## Local Development

Preview the site locally with Python's built-in HTTP server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Deployment

Pushes to the `main` branch are automatically deployed via GitHub Pages:

```bash
git add .
git commit -m "Update content"
git push origin main
```
