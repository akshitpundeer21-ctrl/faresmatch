# FaresMatch

**AI-Powered Travel Booking & Itinerary Mobile App**

Built with React Native, Expo, and TypeScript. A beautiful, production-ready travel app with flight booking, hotel search, AI trip generation, and collaborative itinerary planning.

---

## 🚀 Quick Start

```bash
cd faresmatch
npm install
npm start
```

Press `i` for iOS, `a` for Android, or scan QR with Expo Go.

---

## ✨ Features

### Flight Booking
- Search flights with one-way/round-trip/multi-city options
- Filter by best, cheapest, fastest, non-stop
- Real-time price comparisons
- Trending fares carousel with price drops

### Hotel Booking
- Search hotels by destination and dates
- Filter by stars, rating, price
- View hotel details with reviews
- Map and list views

### AI Trip Builder
- Generate personalized itineraries
- Budget-based recommendations ($/$$/$$$)
- Interest-based suggestions (Food, Culture, Adventure, etc.)
- Find destinations by photo

### Itinerary Management
- Timeline view with day-by-day activities
- Edit mode with drag-drop reordering
- Color-coded activity types (flight, hotel, dining, activity)
- Group collaboration support

### Budget Tracking
- Visualize travel spending with charts
- Track expenses over time
- Monthly budget analysis

### Authentication
- Optional login (browse without account)
- Secure auth with AsyncStorage
- Profile management

---

## 🛠 Tech Stack

- **React Native** + **Expo** - Cross-platform mobile framework
- **TypeScript** - Type safety
- **NativeWind** - Tailwind CSS for React Native
- **Zustand** - State management
- **React Navigation** - Routing
- **Victory Native** - Charts and data visualization
- **Socket.io Client** - Real-time collaboration (ready)
- **react-native-calendars** - Date pickers (ready)
- **Lucide React Native** - Icon components

---

## 📁 Project Structure

```
faresmatch/
├── app/                    # Screens (Expo Router)
│   ├── (tabs)/            # Tab navigation screens
│   └── *.tsx              # Stack screens
├── components/            # Reusable components
├── store/                 # Zustand state stores
├── constants/             # Theme, colors, mock data
├── utils/                 # Helper functions
└── package.json
```

---

## 🎨 Design System

### Colors
- **Primary**: #C8D400 (Lime Yellow)
- **Auth Screens**: Brutalist minimal design with sharp corners
- **App Screens**: Modern rounded cards

### Typography
- **Auth**: JetBrains Mono
- **App**: Inter

### Icons
- Lucide React Native components only (no unicode emojis)

---

## 📱 Screens

1. **Home** - Flight search hero with trending fares
2. **Flight Results** - Search results with filters
3. **Hotel Search** - Hotel search form
4. **Hotel Results** - Hotel listings with ratings
5. **AI Trips** - AI trip builder with budget/interests
6. **Itinerary Detail** - Timeline view with activities
7. **Explore** - Discover destinations
8. **Bookings** - User booking history
9. **Profile** - User profile and settings
10. **Login** - Authentication
11. **Signup** - User registration

---

## 🔮 Future Enhancements

- [ ] Calendar integration for date pickers
- [ ] Socket.io real-time group collaboration
- [ ] Flight detail with seat selection
- [ ] Checkout and payment flow
- [ ] Push notifications
- [ ] Offline mode
- [ ] Multi-language support
- [ ] Map view for hotels
- [ ] Photo upload for AI trip finder
- [ ] Deep linking (faresmatch://)

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

---

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a pull request.

---

## 📞 Support

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ using React Native + Expo + TypeScript**

---

## 📤 Deploy to GitHub

```bash
# Create new repo on GitHub: https://github.com/new

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/faresmatch.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

**Ready to ship! 🚀**
