# CartRush

A multi-page game price-checking website built entirely with vanilla HTML, CSS, and JavaScript. CartRush is a practice project: you can browse games, search live prices, and manage a cart, but no real purchases take place.

## Features
- **Live search** powered by the CheapShark API, with debounced input, async/await, URL encoding, dynamically generated cards, and handling of outdated responses, empty results, and network errors
- **Home page** with an autoplay poster slider (10 games, next/prev buttons, pause on hover) and four categorized sections: New, Trend, Action, and Horror
- **Games page** with a full catalog of games
- **Hover overlays** on every card showing name, original price, sale price, and a Buy button, including for cards created dynamically from search results (via event delegation)
- **Shopping cart** with add/remove, live item counter in the navbar, total price calculation, and persistence through LocalStorage
- **Top Day / Week / Month** ranking section
- **About Me page** with an auto-sliding showcase of my previous projects
- **Smooth page transitions** using the View Transitions API
- **Responsive design** across multiple breakpoints, from desktop to small mobile screens

## Tech Stack
HTML5, CSS3 (Grid, Flexbox, conic-gradient, View Transitions), JavaScript (ES6+, Fetch API, LocalStorage, DOM manipulation)

## What I Practiced
- Working with a real external API and handling race conditions
- State + render patterns (currentIndex slider)
- Event delegation for dynamically created elements
- Persisting and restoring app state with LocalStorage
- Building and debugging a larger multi-page project

## Project Info
Fourth full-scale vanilla JS project, built over 21 days (5 Mehr – 26 Mehr 1405).
