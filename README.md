# FaresMatch

AI-powered travel booking and itinerary mobile app built with React Native, Expo, and TypeScript.

## Features

- **Flight Search & Booking**: Search flights with advanced filters, compare prices, and book tickets
- **Hotel Search & Booking**: Find and book hotels with map/list views
- **AI Trip Builder**: Generate personalized itineraries based on budget, interests, and preferences
- **Real-time Collaboration**: Group trip planning with Socket.io live sync
- **Budget Tracking**: Visualize travel spending with Victory Native charts
- **Price Alerts**: Get notified when flight prices drop
- **Trending Fares**: Discover the best deals and price drops

## Tech Stack

- **React Native** with **Expo**
- **TypeScript** for type safety
- **NativeWind** (Tailwind CSS for React Native)
- **Zustand** for state management
- **React Navigation** for routing
- **React Native Reanimated** for smooth animations
- **Victory Native** for charts
- **Socket.io** for real-time collaboration
- **react-native-calendars** for date pickers
- **Lucide React Native** for icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI

### Installation

```bash
cd faresmatch
npm install
```

### Run the App

```bash
# Start Expo dev server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web
```

## Project Structure

```
faresmatch/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Home screen with flight search
│   │   ├── explore.tsx        # Explore destinations
│   │   ├── ai-trips.tsx       # AI trip builder
│   │   ├── bookings.tsx       # User bookings
│   │   └── profile.tsx        # User profile
│   ├── _layout.tsx            # Root layout
│   └── flight-results.tsx     # Flight search results
├── components/
│   ├── AuthGate.tsx           # Auth modal
│   ├── LoginScreen.tsx        # Login form
│   ├── SignupScreen.tsx       # Signup form
│   ├── TrendingFares.tsx      # Trending fares carousel
│   ├── AITripCard.tsx         # AI trip upsell card
│   └── BudgetChart.tsx        # Budget tracking chart
├── store/
│   ├── authStore.ts           # Auth state management
│   ├── searchStore.ts         # Search state management
│   └── itineraryStore.ts      # Itinerary state management
└── package.json
```

## Design System

- **Primary Color**: #C8D400 (Lime Yellow)
- **Auth Screens**: JetBrains Mono font, brutalist minimal design
- **App Screens**: Inter font, rounded cards
- **Icons**: Lucide React Native (no unicode emojis)

## Authentication

- Auth is optional - users can browse without logging in
- Login/Signup required for: booking, AI itinerary, saving trips, group collaboration
- Auth state persisted in AsyncStorage

## License

MIT
