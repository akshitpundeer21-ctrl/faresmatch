import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { TrendingUp } from 'lucide-react-native';

const fares = [
  { from: 'NYC', to: 'LON', dates: 'Oct 12 - Oct 19', price: 340, oldPrice: 550, save: 38 },
  { from: 'LAX', to: 'TYO', dates: 'Nov 5 - Nov 12', price: 520, oldPrice: 780, save: 33 },
  { from: 'SFO', to: 'PAR', dates: 'Dec 1 - Dec 8', price: 410, oldPrice: 620, save: 34 },
];

export default function TrendingFares({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <TrendingUp size={20} color="#000" />
          <Text style={styles.title}>Price Drops & Trending Fares</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {fares.map((fare, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Text style={styles.route}>
              {fare.from} → {fare.to}
            </Text>
            <Text style={styles.dates}>{fare.dates}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>${fare.price}</Text>
              <Text style={styles.oldPrice}>${fare.oldPrice}</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Save {fare.save}%</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#3b82f6',
    fontSize: 14,
  },
  scroll: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    width: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  route: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  dates: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 12,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  oldPrice: {
    fontSize: 14,
    color: '#9ca3af',
    textDecorationLine: 'line-through',
  },
  badge: {
    backgroundColor: '#C8D400',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
});
