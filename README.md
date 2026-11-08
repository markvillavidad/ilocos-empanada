# Ilocos Empanada

A responsive website for Ilocos Empanada, a small home-based business in
Meadowvale, Mississauga. The site introduces Ilocos empanada, shares the
business story and menu, and helps visitors find the business or start an
order through Messenger.

Website: [ilocosempanada.ca](https://ilocosempanada.ca)

## Getting started

### Requirements

- Node.js and npm

### Install dependencies

```sh
npm install
```

### Run the development server

```sh
npm run dev
```

Vite prints the local URL when the server starts. By default, open
[http://localhost:5173](http://localhost:5173).

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run build` | Type-check the TypeScript project and create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally, usually at `http://localhost:4173`. |
| `npm run lint` | Run ESLint on the project. |

## Website sections

- **Our Story** navigation links to the dish introduction and the business
  story.
- **Menu** shows the available empanadas and prices.
- **Find Us** includes the pickup location and contact information.
- **Order Now** and the floating Messenger button open the business's
  Messenger conversation.

The Messenger destination is defined in `src/constants.ts` and shared by the
ordering links throughout the site.

## Project structure

```text
src/
  assets/                  Images and brand assets
  components/
    layout/                Header, footer, brand, and Messenger button
    sections/              Hero, story, menu, and location sections
  App.tsx                  Page composition
  App.css                  Site styles and responsive layouts
  constants.ts             Shared site links
```

The project uses React, TypeScript, and Vite. Global page styles and responsive
rules are in `src/App.css`.
