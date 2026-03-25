# FaresMatch - GitHub Upload Instructions

## Quick Start

### 1. Create GitHub Repository

Go to [https://github.com/new](https://github.com/new) and create a new repository named `faresmatch`.

### 2. Push to GitHub

Run these commands in your terminal:

```bash
cd C:\Users\abc\.openclaw\workspace\faresmatch

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/faresmatch.git

# Push to main branch
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## What's Included

This repository contains a complete React Native mobile app with:

- **Flight Booking**: Search, filter, and book flights
- **Hotel Booking**: Search and book hotels with ratings
- **AI Trip Builder**: Generate itineraries based on budget and interests
- **Itinerary Management**: Timeline view with drag-drop editing
- **Group Collaboration**: Real-time sync with Socket.io (ready to implement)
- **Budget Tracking**: Visualize spending with Victory Native charts
- **Authentication**: Login/signup with AsyncStorage persistence

## Tech Stack

- React Native + Expo
- TypeScript
- NativeWind (Tailwind CSS)
- Zustand (State Management)
- React Navigation
- Victory Native (Charts)
- Lucide React Native (Icons)

## Installation

```bash
npm install
npm start
```

## Repository Structure

```
faresmatch/
├── app/                    # Screens (Expo Router)
├── components/             # Reusable components
├── store/                  # Zustand stores
├── package.json
├── README.md
└── NOTES.md               # Development notes
```

## License

MIT

---

**Ready to push!** Follow the steps above to upload to GitHub.
