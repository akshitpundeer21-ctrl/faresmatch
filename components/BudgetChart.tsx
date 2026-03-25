import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory-native';

const data = [
  { month: 'Jan', amount: 1200 },
  { month: 'Feb', amount: 800 },
  { month: 'Mar', amount: 1500 },
  { month: 'Apr', amount: 2100 },
  { month: 'May', amount: 1800 },
  { month: 'Jun', amount: 2300 },
];

export default function BudgetChart() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Travel Budget Tracking</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Last 6 Months</Text>
        </View>
      </View>

      <VictoryChart
        theme={VictoryTheme.material}
        width={Dimensions.get('window').width - 64}
        height={220}
        domainPadding={{ x: 20 }}
      >
        <VictoryAxis
          style={{
            axis: { stroke: '#e5e7eb' },
            tickLabels: { fontSize: 12, fill: '#6b7280' },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: '#e5e7eb' },
            tickLabels: { fontSize: 12, fill: '#6b7280' },
            grid: { stroke: '#f3f4f6' },
          }}
        />
        <VictoryBar
          data={data}
          x="month"
          y="amount"
          style={{
            data: { fill: '#a78bfa' },
          }}
          cornerRadius={{ top: 4 }}
          barWidth={24}
        />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  badge: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    color: '#6b7280',
  },
});
