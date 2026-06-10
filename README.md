# Sanah Tatla Portfolio

A modern, responsive portfolio website showcasing my projects, technical
skills, experience, and resume as a computer science student at Simon Fraser
University.

## Features

- Responsive single-page layout
- About and technical skills sections
- Project cards with links to source repositories
- Education and experience timeline
- PDF resume viewer
- Email and social contact links
- Accessible navigation and reduced-motion support

## Built With

- React
- Vite
- JavaScript
- CSS
- ESLint

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Installation

```bash
git clone https://github.com/sanaht77/my-website.git
cd my-website
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## Project Structure

```text
src/
  assets/       Headshot and resume files
  components/   Shared navigation, footer, and interface components
  data/         Profile, project, skill, and experience content
  sections/     Hero, about, projects, and resume sections
  styles/       Global and responsive styles
```

## Updating Content

Most portfolio content is stored in
[`src/data/portfolio.js`](src/data/portfolio.js). Update this file to change:

- Contact and social links
- Project descriptions, technologies, and repository URLs
- Technical skill groups
- Education and experience entries

Images and the resume PDF are stored in [`src/assets`](src/assets).

## Production

Create an optimized build with:

```bash
npm run build
```

The generated site will be available in the `dist` directory and can be
deployed to services such as GitHub Pages, Vercel, or Netlify.

## Contact

**Sanah Tatla**

- [LinkedIn](https://www.linkedin.com/in/sanah-tatla-472b1a222/)
- [GitHub](https://github.com/sanaht77)
- [Medium](https://medium.com/@sanaht77)
