# Personal Portfolio Website - The Matt Viana

This is a personal portfolio website for an AI Researcher and PhD Student, featuring a unique Tarot Card interactive component and an academic/mystical aesthetic.

## Features

- **Responsive Design:** Built with HTML5 and CSS3.
- **Academic/Mystical Theme:** Custom typography (Times New Roman, Georgia), gold accents, and unique background tiles for each page.
- **Interactive Tarot Component:** A carousel of 3D flipping cards that cycle through information (News, Publications, Mission) with an animated backing image swap.
- **GitHub Pages Ready:** Uses relative paths for easy deployment.

## Deployment Instructions

### GitHub Pages

1.  Push this repository to GitHub.
2.  Go to the repository **Settings**.
3.  Navigate to the **Pages** section (on the left sidebar).
4.  Under **Build and deployment**, select **Source** as `Deploy from a branch`.
5.  Select the branch you want to deploy (e.g., `main` or `website-portfolio-feature...`) and the folder `/ (root)`.
6.  Click **Save**.
7.  Wait a few minutes for the site to build. The URL will be displayed at the top of the Pages settings.

## Project Structure

- `index.html`: Home page with Hero, Navigation, and Tarot component.
- `style.css`: Global styles and variables.
- `script.js`: Logic for the Tarot Card animation cycle.
- `assets/`: Contains all images (tiles, tarot cards, etc.).
- `*.html`: Secondary pages (About, News, Collaborators, etc.).

## Notes

- Ensure all asset filenames use underscores instead of spaces for web compatibility (e.g., `tarot_1.png`).
- The project is designed to be lightweight with no build steps required.
