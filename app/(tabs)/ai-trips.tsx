import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Camera, DollarSign } from 'lucide-react-native';

const interests = [
  { id: 'food', label: 'Food & Dining', color: '#10b981' },
  { id: 'culture', label: 'Culture', color: '#8b5cf6' },
  { id: 'adventure', label: 'Adventure', color: '#f59e0b' },
  { id: 'photography', label: 'Photography', color: '#3b82f6' },
  { id: 'nature', label: 'Nature', color: '#059669' },
  { id: 'shopping', label: 'Shopping', color: '#ec4899' },
];

export default function AITripsScreen() {
  const [budget, setBudget] = useState<'budget' | 'moderate' | 'luxury'>('moderate');
  const [travelers, setTravelers] = useState('Solo');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['food']);

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AI Trip Builder</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.photoCard}>
          <View style={styles.photoCardContent}>
            <Camera size={32} color="#fff" />
            <Text style={styles.photoCardTitle}>Find by Photo</Text>
            <Text style={styles.photoCardSubtitle}>
              Upload a landmark photo and we'll find it
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Budget Range</Text>
          <View style={styles.budgetRow}>
            <TouchableOpacity
              style={[styles.budgetButton, budget === 'budget' && styles.budgetButtonActive]}
              onPress={() => setBudget('budget')}
            >
              <DollarSign size={16} color={budget === 'budget' ? '#fff' : '#000'} />
              <Text style={[styles.budgetText, budget === 'budget' && styles.budgetTextActive]}>
                Budget
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.budgetButton, budget === 'moderate' && styles.budgetButtonActive]}
              onPress={() => setBudget('moderate')}
            >
              <DollarSign size={16} color={budget === 'moderate' ? '#fff' : '#000'} />
              <DollarSign size={16} color={budget === 'moderate' ? '#fff' : '#000'} style={{ marginLeft: -8 }} />
              <Text style={[styles.budgetText, budget === 'moderate' && styles.budgetTextActive]}>
                Moderate
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.budgetButton, budget === 'luxury' && styles.budgetButtonActive]}
              onPress={() => setBudget('luxury')}
            >
              <DollarSign size={16} color={budget === 'luxury' ? '#fff' : '#000'} />
              <DollarSign size={16} color={budget === 'luxury' ? '#fff' : '#000'} style={{ marginLeft: -8 }} />
              <DollarSign size={16} color={budget === 'luxury' ? '#fff' : '#000'} style={{ marginLeft: -8 }} />
              <Text style={[styles.budgetText, budget === 'luxury' && styles.budgetTextActive]}>
                Luxury
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Who's traveling?</Text>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>{travelers}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <View style={styles.interestsGrid}>
            {interests.map((interest) => (
              <TouchableOpacity
                key={interest.id}
                style={[
                  styles.interestChip,
                  selectedInterests.includes(interest.id) && {
                    backgroundColor: interest.color,
                  },
                ]}
                onPress={() => toggleInterest(interest.id)}
              >
                <Text
                  style={[
                    styles.interestText,
                    selectedInterests.includes(interest.id) && styles.interestTextActive,
                  ]}
                >
                  {interest.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.generateButton}>
          <Text style={styles.generateButtonText}>GENERATE MY ITINERARY</Text>
        </TouchableOpacity>
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
  photoCard: {
    backgroundColor: '#ec4899',
    borderRadius: 16,
    padding: 32,
    marginBottom: 24,
    alignItems: 'center',
  },
  photoCardContent: {
    alignItems: 'center',
  },
  photoCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 12,
  },
  photoCardSubtitle: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
    opacity: 0.9,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  budgetRow: {
    flexDirection: 'row',
    gap: 8,
  },
  budgetButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  budgetButtonActive: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  budgetText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  budgetTextActive: {
    color: '#fff',
  },
  dropdown: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  dropdownText: {
    fontSize: 14,
  },
  interestsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  interestChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  interestText: {
    fontSize: 14,
    color: '#374151',
  },
  interestTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  generateButton: {
    backgroundColor: '#C8D400',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  generateButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
