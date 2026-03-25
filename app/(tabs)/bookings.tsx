import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function BookingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Bookings</Text>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.placeholder}>No bookings yet</Text>
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
    padding: 16,
  },
  placeholder: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 40,
  },
});
