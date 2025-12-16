# Airbnb Clone

A full-stack Airbnb clone built with Next.js, React, and Tailwind CSS. This application replicates the core features of Airbnb including property search, date selection, guest count, and interactive maps.

## Features

- 🏠 Browse nearby locations and properties
- 🔍 Search functionality with location, dates, and guest count
- 📅 Date range picker for booking
- 🗺️ Interactive map integration with MapBox
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Server-side rendering with Next.js

## Tech Stack

- **Framework**: Next.js
- **Frontend**: React 17
- **Styling**: Tailwind CSS 2.2 with JIT mode
- **Maps**: react-map-gl (MapBox)
- **Icons**: Heroicons
- **Date Handling**: date-fns, react-date-range
- **Geolocation**: geolib
- **Progress Bar**: @badrap/bar-of-progress

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Htbarbosa/airbnb-papareact.git
cd airbnb-papareact
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
├── components/          # Reusable React components
│   ├── Banner.js       # Hero banner component
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Footer component
│   ├── SmallCard.js    # Location cards
│   ├── MediumCard.js   # Category cards
│   ├── LargeCard.js    # Featured content card
│   ├── InfoCard.js     # Search results card
│   └── Map.js          # MapBox integration
├── pages/              # Next.js pages
│   ├── index.js        # Home page
│   ├── search.js       # Search results page
│   └── api/            # API routes
├── public/             # Static assets
└── styles/             # Global styles
```

## Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm start` - Runs the built app in production mode

## Deploy

Deploy the application using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Htbarbosa/airbnb-papareact)

## License

This project is for educational purposes.
