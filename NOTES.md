# FaresMatch - Development Notes

## Project Overview
AI-powered travel booking and itinerary mobile app built with React Native, Expo, and TypeScript.

## Completed Features

### Core Structure
- ✅ Expo Router setup with tab navigation
- ✅ TypeScript configuration
- ✅ NativeWind (Tailwind CSS) integration
- ✅ Zustand state management stores
- ✅ Auth flow with AsyncStorage persistence

### Screens Implemented

#### Authentication
- ✅ AuthGate modal (bottom sheet)
- ✅ Login screen (JetBrains Mono, brutalist design)
- ✅ Signup screen (JetBrains Mono, brutalist design)

#### Main Tabs
- ✅ Home (Flight-first hero search widget)
- ✅ Explore (placeholder)
- ✅ AI Trips (trip builder with budget/interests)
- ✅ Bookings (placeholder)
- ✅ Profile (user info, logout)

#### Flight Booking
- ✅ Flight search form (one-way/round-trip/multi-city)
- ✅ Flight results screen with filters
- ✅ Flight cards with airline, times, price

#### Hotel Booking
- ✅ Hotel search screen
- ✅ Hotel results screen with cards

#### Components
- ✅ Trending Fares carousel
- ✅ AI Trip Card (upsell)
- ✅ Budget Chart (Victory Native)

### Design System
- Primary color: #C8D400 (Lime Yellow)
- Auth screens: JetBrains Mono, sharp corners (0 border radius)
- App screens: Inter font, rounded cards (border radius xl)
- Icons: Lucide React Native (no unicode emojis)

## Remaining Features to Implement

### High Priority
- [ ] Calendar integration (react-native-calendars) for date pickers
- [ ] Flight detail screen with seat selection
- [ ] Hotel detail screen with room selection
- [ ] Checkout flow with payment
- [ ] Booking confirmation with PNR/e-ticket

### Medium Priority
- [ ] Itinerary detail screen with timeline
- [ ] Itinerary edit mode (drag-drop, swipe delete)
- [ ] Group collaboration with Socket.io
- [ ] Real-time sync for group trips
- [ ] Group chat with emoji reactions

### Low Priority
- [ ] Price alerts toggle
- [ ] Notifications screen
- [ ] Advanced filters (bottom sheet)
- [ ] Map view for hotels
- [ ] Photo upload for AI trip finder
- [ ] Deep linking (faresmatch://)

## Installation & Setup

```bash
cd faresmatch
npm install
npm start
```

## Git Repository
Initialized with git. Ready to push to GitHub.

## Next Steps
1. Implement calendar pickers for all date inputs
2. Build flight detail and checkout screens
3. Add Socket.io for real-time collaboration
4. Create itinerary timeline view
5. Test on iOS and Android devices
