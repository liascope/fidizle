Movies & Series Archive

A modern movie and series archive app built with React Native, TypeScript, and Expo.

The app allows users to discover movies and TV series through the OMDb API, view detailed information, assign personal ratings, and organize titles in separate movie and series archives.

The interface is designed with a modern, Netflix-inspired visual language and supports both light and dark mode.

Features

🔎 Search & Discovery

Search for movies and TV series using the OMDb API.

Search results provide a clear overview of available titles, making it easy to discover and select content.

🎬 Detailed Title Information

Each movie or series provides relevant information including:

* Rating
* Awards
* Director
* Plot / synopsis
* Title metadata
* Movie or series type

The detail view is designed to make the most important information easy to scan.

⭐ Personal Ratings

Users can assign their own star rating to movies and series, allowing the archive to reflect personal preferences rather than relying solely on external ratings.

📚 Personal Archives

Titles can be added to a personal archive and organized into separate sections for:

* Movies
* Series

This creates a dedicated personal library of saved content.

📤 Native Sharing

Movies and series archives can be shared using the device's native sharing functionality.

This allows users to share their archive with other apps and services such as messaging and social media applications.

🌙 Dark & Light Mode

The application supports both dark and light themes with a consistent UI across the entire app.

📱 Responsive Mobile UI

The interface is designed specifically for mobile devices while adapting the layout and presentation to different screen sizes.

The visual design follows a modern, streaming-service-inspired aesthetic with an emphasis on:

* Clear content hierarchy
* Card-based layouts
* Smooth interactions
* Accessible navigation
* Responsive components

Tech Stack

Core

* React Native — Cross-platform mobile application development
* TypeScript — Static typing and improved code maintainability
* Expo — Development and native tooling

Data & Architecture

* REST API — External data integration
* OMDb API — Movie and TV series data
* Context API — Application-wide state management
* Custom Hooks — Reusable state and logic abstraction

UI & Interaction

* @gorhom/bottom-sheet — Interactive bottom sheet interfaces
* Ionicons / React Native Vector Icons — Iconography
* Dark / Light Theme — Dynamic application theming

 Native Features

* Native Sharing — Sharing archive content with other installed applications

 Architecture

The application separates UI components from reusable application logic and shared state.

Context API is used for global application state, while custom hooks encapsulate reusable logic and keep components focused on presentation.

API-related functionality is handled through reusable logic rather than being tightly coupled to individual UI components.

This structure makes the application easier to maintain and extend as additional functionality is introduced.

API Integration

The application uses the OMDb API to retrieve movie and series information.

The search flow can be summarized as:

1. User enters a movie or series title.
2. The application requests matching results from the OMDb API.
3. Search results are displayed in the UI.
4. The user selects a title to view its details.
5. The title can be personally rated and added to the corresponding archive.

 Highlights

This project focuses on combining external data with a polished mobile experience rather than simply displaying API results.

Key implementation areas include:

* REST API integration
* Asynchronous data fetching
* Global state management
* Reusable custom hooks
* Reusable React Native components
* Dynamic theming
* Native device functionality
* Responsive mobile layouts
* Interactive bottom sheets
* Personal data organization

Project Goals

The main goal of the project was to build a complete React Native application around a realistic use case while focusing on both application architecture and user experience.

The project also served as an opportunity to deepen my experience with:

* React Native
* TypeScript
* Mobile UI development
* API-driven applications
* State management
* Reusable component architecture
* Native platform capabilities

Status

The application is currently a personal portfolio project and has not yet been published to the App Store or Google Play.

Further development may include additional archive functionality, UX improvements, and expanded personalization features.
