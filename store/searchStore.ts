import { create } from 'zustand';

export interface Flight {
  id: string;
  airline: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  stops: number;
  price: number;
  oldPrice?: number;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  stars: number;
  rating: number;
  price: number;
  image: string;
  distance: string;
}

interface SearchState {
  // Flight search
  flightFrom: string;
  flightTo: string;
  flightDeparture: string;
  flightReturn: string;
  flightTravelers: number;
  flightCabin: string;
  flightType: 'one-way' | 'round-trip' | 'multi-city';
  
  // Hotel search
  hotelDestination: string;
  hotelCheckIn: string;
  hotelCheckOut: string;
  hotelRooms: number;
  hotelGuests: number;
  
  // Results
  flights: Flight[];
  hotels: Hotel[];
  
  // Actions
  setFlightSearch: (data: Partial<SearchState>) => void;
  setHotelSearch: (data: Partial<SearchState>) => void;
  setFlights: (flights: Flight[]) => void;
  setHotels: (hotels: Hotel[]) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  flightFrom: '',
  flightTo: '',
  flightDeparture: '',
  flightReturn: '',
  flightTravelers: 1,
  flightCabin: 'Economy',
  flightType: 'round-trip',
  
  hotelDestination: '',
  hotelCheckIn: '',
  hotelCheckOut: '',
  hotelRooms: 1,
  hotelGuests: 1,
  
  flights: [],
  hotels: [],
  
  setFlightSearch: (data) => set((state) => ({ ...state, ...data })),
  setHotelSearch: (data) => set((state) => ({ ...state, ...data })),
  setFlights: (flights) => set({ flights }),
  setHotels: (hotels) => set({ hotels }),
}));
