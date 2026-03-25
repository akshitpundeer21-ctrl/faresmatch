import { create } from 'zustand';

export interface ItineraryActivity {
  id: string;
  day: number;
  time: string;
  title: string;
  description: string;
  type: 'flight' | 'hotel' | 'activity' | 'dining';
  color: string;
}

export interface Itinerary {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: string;
  travelers: string;
  activities: ItineraryActivity[];
  groupMembers?: string[];
}

interface ItineraryState {
  itineraries: Itinerary[];
  currentItinerary: Itinerary | null;
  isEditing: boolean;
  
  addItinerary: (itinerary: Itinerary) => void;
  updateItinerary: (id: string, updates: Partial<Itinerary>) => void;
  deleteItinerary: (id: string) => void;
  setCurrentItinerary: (itinerary: Itinerary | null) => void;
  setEditing: (editing: boolean) => void;
  reorderActivities: (activities: ItineraryActivity[]) => void;
}

export const useItineraryStore = create<ItineraryState>((set) => ({
  itineraries: [],
  currentItinerary: null,
  isEditing: false,
  
  addItinerary: (itinerary) => 
    set((state) => ({ itineraries: [...state.itineraries, itinerary] })),
  
  updateItinerary: (id, updates) =>
    set((state) => ({
      itineraries: state.itineraries.map((i) =>
        i.id === id ? { ...i, ...updates } : i
      ),
      currentItinerary: state.currentItinerary?.id === id
        ? { ...state.currentItinerary, ...updates }
        : state.currentItinerary,
    })),
  
  deleteItinerary: (id) =>
    set((state) => ({
      itineraries: state.itineraries.filter((i) => i.id !== id),
    })),
  
  setCurrentItinerary: (itinerary) => set({ currentItinerary: itinerary }),
  
  setEditing: (editing) => set({ isEditing: editing }),
  
  reorderActivities: (activities) =>
    set((state) => ({
      currentItinerary: state.currentItinerary
        ? { ...state.currentItinerary, activities }
        : null,
    })),
}));
