import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Bell, Plane, ArrowLeftRight, Calendar, Users } from 'lucide-react-native';
import { useSearchStore } from '@/store/searchStore';
import TrendingFares from '@/components/TrendingFares';
import AITripCard from '@/components/AITripCard';
import BudgetChart from '@/components/BudgetChart';

export default function HomeScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'ai-trips'>('flights');
  const [tripType, setTripType] = useState<'one-way' | 'round-trip' | 'multi-city'>('round-trip');
  
  const {
    flightFrom,
    flightTo,
    flightDeparture,
    flightReturn,
    flightTravelers,
    flightCabin,
    setFlightSearch,
  } = useSearchStore();

  const handleSearchFlights = () => {
    navigation.navigate('FlightResults');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Plane size={24} color="#000" />
          <Text style={styles.logo}>FaresMatch</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Bell size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.heroCard}>
          <View style={styles.tabs}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'flights' && styles.activeTab]}
              onPress={() => setActiveTab('flights')}
            >
              <Text style={[styles.tabText, activeTab === 'flights' && styles.activeTabText]}>
                Flights
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'hotels' && styles.activeTab]}
              onPress={() => setActiveTab('hotels')}
            >
              <Text style={[styles.tabText, activeTab === 'hotels' && styles.activeTabText]}>
                Hotels
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'ai-trips' && styles.activeTab]}
              onPress={() => setActiveTab('ai-trips')}
            >
              <Text style={[styles.tabText, activeTab === 'ai-trips' && styles.activeTabText]}>
                AI Trips
              </Text>
            </TouchableOpacity>
          </View>

          {activeTab === 'flights' && (
            <View style={styles.searchForm}>
              <View style={styles.tripTypeRow}>
                {['one-way', 'round-trip', 'multi-city'].map((type) => (
                  <TouchableOpacity
                    key={type}
                    style={[
                      styles.tripTypeButton,
                      tripType === type && styles.tripTypeButtonActive,
                    ]}
                    onPress={() => setTripType(type as any)}
                  >
                    <Text
                      style={[
                        styles.tripTypeText,
                        tripType === type && styles.tripTypeTextActive,
                      ]}
                    >
                      {type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.routeContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="From (e.g., DEL - Delhi)"
                  value={flightFrom}
                  onChangeText={(text) => setFlightSearch({ flightFrom: text })}
                />
                
                <TouchableOpacity style={styles.swapButton}>
                  <ArrowLeftRight size={20} color="#666" />
                </TouchableOpacity>

                <TextInput
                  style={styles.input}
                  placeholder="To (e.g., BOM - Mumbai)"
                  value={flightTo}
                  onChangeText={(text) => setFlightSearch({ flightTo: text })}
                />
              </View>

              <View style={styles.dateRow}>
                <TouchableOpacity style={styles.dateInput}>
                  <Calendar size={16} color="#666" />
                  <Text style={styles.dateText}>
                    {flightDeparture || 'Departure'}
                  </Text>
                </TouchableOpacity>

                {tripType === 'round-trip' && (
                  <TouchableOpacity style={styles.dateInput}>
                    <Calendar size={16} color="#666" />
                    <Text style={styles.dateText}>
                      {flightReturn || 'Return'}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>

              <TouchableOpacity style={styles.travelersInput}>
                <Users size={16} color="#666" />
                <Text style={styles.travelersText}>
                  {flightTravelers} Adult, {flightCabin}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.searchButton} onPress={handleSearchFlights}>
                <Text style={styles.searchButtonText}>SEARCH FLIGHTS</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <TrendingFares navigation={navigation} />
        <AITripCard navigation={navigation} />
        <BudgetChart />
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
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  content: {
    flex: 1,
  },
  heroCard: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#C8D400',
  },
  tabText: {
    fontSize: 16,
    color: '#6b7280',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  searchForm: {
    gap: 12,
  },
  tripTypeRow: {
    flexDirection: 'row',
    gap: 8,
  },
  tripTypeButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
  },
  tripTypeButtonActive: {
    backgroundColor: '#000',
  },
  tripTypeText: {
    fontSize: 12,
    color: '#6b7280',
  },
  tripTypeTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  routeContainer: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#f9fafb',
    padding: 14,
    borderRadius: 8,
    fontSize: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  swapButton: {
    position: 'absolute',
    right: 12,
    top: 50,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  dateRow: {
    flexDirection: 'row',
    gap: 8,
  },
  dateInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    padding: 14,
    borderRadius: 8,
    gap: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  dateText: {
    fontSize: 14,
    color: '#374151',
  },
  travelersInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    padding: 14,
    borderRadius: 8,
    gap: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  travelersText: {
    fontSize: 14,
    color: '#374151',
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
