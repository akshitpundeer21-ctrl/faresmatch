import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { ArrowLeft, MapPin, Star } from 'lucide-react-native';

const hotels = [
  {
    id: '1',
    name: 'The Grand Plaza Hotel',
    location: 'Downtown, Mumbai',
    stars: 5,
    rating: 4.8,
    reviews: 1234,
    price: 8500,
    distance: '2.5 km from center',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: '2',
    name: 'Comfort Inn & Suites',
    location: 'Bandra West, Mumbai',
    stars: 4,
    rating: 4.5,
    reviews: 856,
    price: 5200,
    distance: '3.8 km from center',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: '3',
    name: 'Budget Stay Hotel',
    location: 'Andheri, Mumbai',
    stars: 3,
    rating: 4.2,
    reviews: 432,
    price: 3200,
    distance: '8.2 km from center',
    image: 'https://via.placeholder.com/300x200',
  },
];

export default function HotelResultsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Hotels in Mumbai</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        {hotels.map((hotel) => (
          <TouchableOpacity key={hotel.id} style={styles.hotelCard}>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imagePlaceholderText}>Hotel Image</Text>
            </View>

            <View style={styles.hotelInfo}>
              <Text style={styles.hotelName}>{hotel.name}</Text>
              
              <View style={styles.starsRow}>
                {[...Array(hotel.stars)].map((_, i) => (
                  <Star key={i} size={14} color="#fbbf24" fill="#fbbf24" />
                ))}
              </View>

              <View style={styles.locationRow}>
                <MapPin size={14} color="#6b7280" />
                <Text style={styles.locationText}>{hotel.location}</Text>
              </View>

              <Text style={styles.distance}>{hotel.distance}</Text>

              <View style={styles.ratingRow}>
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingText}>{hotel.rating}</Text>
                </View>
                <Text style={styles.reviewsText}>({hotel.reviews} reviews)</Text>
              </View>

              <View style={styles.priceRow}>
                <View>
                  <Text style={styles.priceLabel}>Price per night</Text>
                  <Text style={styles.price}>₹{hotel.price}</Text>
                </View>
                <TouchableOpacity style={styles.viewButton}>
                  <Text style={styles.viewButtonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
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
  content: {
    flex: 1,
    padding: 16,
  },
  hotelCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imagePlaceholder: {
    height: 180,
    backgroundColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholderText: {
    color: '#6b7280',
    fontSize: 14,
  },
  hotelInfo: {
    padding: 16,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  locationText: {
    fontSize: 14,
    color: '#6b7280',
  },
  distance: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  ratingBadge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  reviewsText: {
    fontSize: 12,
    color: '#6b7280',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 2,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewButton: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
