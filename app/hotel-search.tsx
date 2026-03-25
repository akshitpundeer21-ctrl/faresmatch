import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { ArrowLeft, MapPin, Calendar, Users, Plus, Minus } from 'lucide-react-native';

export default function HotelSearchScreen({ navigation }: any) {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Search Hotels</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Destination</Text>
            <View style={styles.inputContainer}>
              <MapPin size={20} color="#6b7280" />
              <TextInput
                style={styles.input}
                placeholder="City or hotel name"
                value={destination}
                onChangeText={setDestination}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, { flex: 1 }]}>
              <Text style={styles.label}>Check-in</Text>
              <TouchableOpacity style={styles.inputContainer}>
                <Calendar size={20} color="#6b7280" />
                <Text style={styles.dateText}>{checkIn || 'Select date'}</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.inputGroup, { flex: 1 }]}>
              <Text style={styles.label}>Check-out</Text>
              <TouchableOpacity style={styles.inputContainer}>
                <Calendar size={20} color="#6b7280" />
                <Text style={styles.dateText}>{checkOut || 'Select date'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Rooms & Guests</Text>
            <View style={styles.stepperContainer}>
              <View style={styles.stepper}>
                <Text style={styles.stepperLabel}>Rooms</Text>
                <View style={styles.stepperControls}>
                  <TouchableOpacity
                    style={styles.stepperButton}
                    onPress={() => setRooms(Math.max(1, rooms - 1))}
                  >
                    <Minus size={16} color="#000" />
                  </TouchableOpacity>
                  <Text style={styles.stepperValue}>{rooms}</Text>
                  <TouchableOpacity
                    style={styles.stepperButton}
                    onPress={() => setRooms(rooms + 1)}
                  >
                    <Plus size={16} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.stepper}>
                <Text style={styles.stepperLabel}>Guests</Text>
                <View style={styles.stepperControls}>
                  <TouchableOpacity
                    style={styles.stepperButton}
                    onPress={() => setGuests(Math.max(1, guests - 1))}
                  >
                    <Minus size={16} color="#000" />
                  </TouchableOpacity>
                  <Text style={styles.stepperValue}>{guests}</Text>
                  <TouchableOpacity
                    style={styles.stepperButton}
                    onPress={() => setGuests(guests + 1)}
                  >
                    <Plus size={16} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>SEARCH HOTELS</Text>
          </TouchableOpacity>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 48,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  form: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#374151',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    gap: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
  dateText: {
    flex: 1,
    fontSize: 14,
    color: '#6b7280',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  stepperContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    gap: 16,
  },
  stepper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stepperLabel: {
    fontSize: 14,
    color: '#374151',
  },
  stepperControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  stepperButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperValue: {
    fontSize: 16,
    fontWeight: 'bold',
    minWidth: 24,
    textAlign: 'center',
  },
  searchButton: {
    backgroundColor: '#C8D400',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  searchButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
