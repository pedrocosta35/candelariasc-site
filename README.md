# Candelária Sport Clube

Official club website for Candelária Sport Clube, built with React and powered by Sanity for content management.

## Overview

This project presents the club's identity, history, leadership, reports, and squad information in a clean and modern digital experience.

It includes:

- landing page with club history and highlights
- social bodies and governance information
- financial and activity reports with PDF access
- player roster and detailed player profiles
- content managed through Sanity

## Tech stack

- React 19
- Vite
- React Router
- Sanity Client
- Custom CSS and responsive layout styling

## Sanity integration

This frontend connects to a Sanity dataset to load club content such as:

- player profiles
- board members
- historical milestones
- reports and PDFs
- homepage content

The studio for managing this content is located in the sibling `studio/candelariasc` project.

## Project structure

```text
src/
  components/
  lib/
  pages/
  assets/
  Layout.jsx
  main.jsx
  router.jsx
```

## Notes

- `src/lib/sanityClient.js` contains the Sanity client and fetch logic.
- Content structure is defined in the Sanity schema files within the studio project.
- If the Sanity project or dataset changes, update the frontend configuration accordingly.
