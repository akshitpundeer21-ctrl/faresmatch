import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { User, LogOut } from 'lucide-react-native';
import { useAuthStore } from '@/store/authStore';

export default function ProfileScreen() {
  const { user, isAuthenticated, logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <ScrollView style={styles.content}>
        {isAuthenticated && user ? (
          <>
            <View style={styles.profileCard}>
              <View style={styles.avatar}>
                <User size={48} color="#6b7280" />
              </View>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.email}>{user.email}</Text>
            </View>

            <View style={styles.section}>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Payment Methods</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Notifications</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Help & Support</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <LogOut size={20} color="#ef4444" />
              <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.notLoggedIn}>
            <Text style={styles.notLoggedInText}>Please log in to view your profile</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    padding: 16,
    paddingTop: 48,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#6b7280',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 16,
  },
  menuItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  menuText: {
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  logoutText: {
    fontSize: 16,
    color: '#ef4444',
    fontWeight: 'bold',
  },
  notLoggedIn: {
    padding: 40,
    alignItems: 'center',
  },
  notLoggedInText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
});
