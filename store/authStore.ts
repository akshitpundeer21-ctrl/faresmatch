import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  loadAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  
  login: async (email: string, password: string) => {
    // Mock login - replace with actual API call
    const user = { id: '1', email, name: email.split('@')[0] };
    await AsyncStorage.setItem('user', JSON.stringify(user));
    set({ user, isAuthenticated: true });
  },
  
  signup: async (email: string, password: string, name: string) => {
    // Mock signup - replace with actual API call
    const user = { id: '1', email, name };
    await AsyncStorage.setItem('user', JSON.stringify(user));
    set({ user, isAuthenticated: true });
  },
  
  logout: async () => {
    await AsyncStorage.removeItem('user');
    set({ user: null, isAuthenticated: false });
  },
  
  loadAuth: async () => {
    const userStr = await AsyncStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      set({ user, isAuthenticated: true });
    }
  },
}));
