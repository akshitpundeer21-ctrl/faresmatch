import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { ArrowLeft, Filter, Plane } from 'lucide-react-native';

const flights = [
  {
    id: '1',
    airline: 'Air India',
    from: 'DEL',
    to: 'BOM',
    departure: '08:30',
    arrival: '10:45',
    duration: '2h 15m',
    stops: 0,
    price: 4500,
  },
  {
    id: '2',
    airline: 'IndiGo',
    from: 'DEL',
    to: 'BOM',
    departure: '11:00',
    arrival: '13:20',
    duration: '2h 20m',
    stops: 0,
    price: 3800,
  },
  {
    id: '3',
    airline: 'SpiceJet',
    from: 'DEL',
    to: 'BOM',
    departure: '14:30',
    arrival: '16:50',
    duration: '2h 20m',
    stops: 0,
    price: 3500,
  },
];

export default function FlightResultsScreen({ navigation }: any) {
  const [filter, setFilter] = useState('best');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>DEL → BOM</Text>
        <TouchableOpacity>
          <Filter size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
        {['best', 'cheapest', 'fastest', 'non-stop'].map((f) => (
          <TouchableOpacity
            key={f}
            style={[styles.filterPill, filter === f && styles.filterPillActive]}
            onPress={() => setFilter(f)}
          >
            <Text style={[styles.filterText, filter === f && styles.filterTextActive]}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.content}>
        {flights.map((flight) => (
          <View key={flight.id} style={styles.flightCard}>
            <View style={styles.flightHeader}>
              <Plane size={20} color="#6b7280" />
              <Text style={styles.airline}>{flight.airline}</Text>
            </View>

            <View style={styles.flightDetails}>
              <View style={styles.timeColumn}>
                <Text style={styles.time}>{flight.departure}</Text>
                <Text style={styles.airport}>{flight.from}</Text>
              </View>

              <View style={styles.durationColumn}>
                <Text style={styles.duration}>{flight.duration}</Text>
                <View style={styles.line} />
                <Text style={styles.stops}>
                  {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop`}
                </Text>
              </View>

              <View style={styles.timeColumn}>
                <Text style={styles.time}>{flight.arrival}</Text>
                <Text style={styles.airport}>{flight.to}</Text>
              </View>
            </View>

            <View style={styles.flightFooter}>
              <Text style={styles.price}>₹{flight.price}</Text>
              <TouchableOpacity style={styles.selectButton}>
                <Text style={styles.selectButtonText}>Select</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  filterScroll: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  filterPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    marginRight: 8,
  },
  filterPillActive: {
    backgroundColor: '#000',
  },
  filterText: {
    fontSize: 14,
    color: '#6b7280',
  },
  filterTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  flightCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  flightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  airline: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  flightDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  timeColumn: {
    alignItems: 'center',
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  airport: {
    fontSize: 12,
    color: '#6b7280',
  },
  durationColumn: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  duration: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 4,
  },
  stops: {
    fontSize: 12,
    color: '#6b7280',
  },
  flightFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  selectButton: {
    backgroundColor: '#000',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
