import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Sparkles } from 'lucide-react-native';

export default function AITripCard({ navigation }: any) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('AITrips')}
    >
      <View style={styles.iconContainer}>
        <Sparkles size={32} color="#C8D400" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Don't know where to go?</Text>
        <Text style={styles.subtitle}>
          Let AI build your perfect itinerary based on your budget and vibe.
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>BUILD AI TRIP</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f2937',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 16,
  },
  iconContainer: {
    marginBottom: 12,
  },
  content: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#d1d5db',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#C8D400',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
