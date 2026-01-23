# Personal Portfolio Website - The Matt Viana

This is a personal portfolio website for an AI Researcher and PhD Student, featuring a unique Tarot Card interactive component and an academic/mystical aesthetic.

## Features

- **Responsive Design:** Built with HTML5 and CSS3.
- **Academic/Mystical Theme:** Custom typography (Times New Roman, Georgia), gold accents, and unique background tiles for each page.
- **Interactive Tarot Component:** A carousel of 3D flipping cards that cycle through information (News, Publications, Mission) with an animated backing image swap.
- **GitHub Pages Ready:** Uses relative paths for easy deployment.

## How to Access the Website (URLs)

The URL of your website depends on the name of your GitHub repository.

### Option 1: User Site (Recommended)
If you want your website to be at `https://TheMattViana.github.io/`:
1.  **Rename this repository** to exactly `TheMattViana.github.io`.
2.  The site will be published at `https://TheMattViana.github.io/`.

### Option 2: Project Site
If your repository has any other name (e.g., `portfolio-website`), your website will be at:
`https://TheMattViana.github.io/portfolio-website/`

**Note:** Ensure you visit the `https` version. It may take a few minutes for the site to appear after deployment.

## Deployment Instructions

1.  **Push** this code to your GitHub repository.
2.  Go to the repository **Settings**.
3.  Navigate to the **Pages** section (on the left sidebar).
4.  Under **Build and deployment**:
    - **Source:** Select `Deploy from a branch`.
    - **Branch:** Select your main branch (e.g., `main` or `master`) and folder `/ (root)`.
5.  Click **Save**.
6.  Look at the top of the page for the message: "Your site is live at..."

## Project Structure

- `index.html`: Home page.
- `style.css`: Global styles.
- `script.js`: Tarot animation logic.
- `assets/`: Images (all filenames use underscores, e.g., `tarot_1.png`).
- `*.html`: Secondary pages.

## Troubleshooting

- **Images not loading?** Ensure you are not using absolute paths (starting with `/`). All paths in this code are relative (e.g., `assets/image.png`).
- **404 Error?** Double-check the URL. If using a project site (Option 2), make sure the repository name is included in the URL.
