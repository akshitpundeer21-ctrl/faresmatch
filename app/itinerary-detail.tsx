import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { ArrowLeft, Clock, MapPin, Users, Calendar } from 'lucide-react-native';

const activities = [
  {
    id: '1',
    day: 1,
    time: '09:00 AM',
    title: 'Arrive at Mumbai Airport',
    description: 'Flight AI-101 from Delhi',
    type: 'flight',
    color: '#3b82f6',
  },
  {
    id: '2',
    day: 1,
    time: '12:00 PM',
    title: 'Check-in at The Grand Plaza',
    description: 'Downtown Mumbai',
    type: 'hotel',
    color: '#8b5cf6',
  },
  {
    id: '3',
    day: 1,
    time: '03:00 PM',
    title: 'Gateway of India',
    description: 'Iconic monument and waterfront',
    type: 'activity',
    color: '#10b981',
  },
  {
    id: '4',
    day: 1,
    time: '07:00 PM',
    title: 'Dinner at Leopold Cafe',
    description: 'Historic restaurant in Colaba',
    type: 'dining',
    color: '#f59e0b',
  },
  {
    id: '5',
    day: 2,
    time: '10:00 AM',
    title: 'Elephanta Caves Tour',
    description: 'UNESCO World Heritage Site',
    type: 'activity',
    color: '#10b981',
  },
];

export default function ItineraryDetailScreen({ navigation }: any) {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.header, isEditing && styles.headerEditing]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color={isEditing ? '#000' : '#000'} />
        </TouchableOpacity>
        <Text style={styles.title}>Mumbai Adventure</Text>
        <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
          <Text style={[styles.editButton, isEditing && styles.editButtonActive]}>
            {isEditing ? 'Done' : 'Edit'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tripInfo}>
        <View style={styles.infoRow}>
          <Calendar size={16} color="#6b7280" />
          <Text style={styles.infoText}>Oct 12 - Oct 19, 2024</Text>
        </View>
        <View style={styles.infoRow}>
          <Users size={16} color="#6b7280" />
          <Text style={styles.infoText}>2 Travelers</Text>
        </View>
        <View style={styles.infoRow}>
          <MapPin size={16} color="#6b7280" />
          <Text style={styles.infoText}>Mumbai, India</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.timeline}>
          {activities.map((activity, index) => {
            const isNewDay = index === 0 || activities[index - 1].day !== activity.day;
            
            return (
              <View key={activity.id}>
                {isNewDay && (
                  <View style={styles.dayHeader}>
                    <Text style={styles.dayText}>Day {activity.day}</Text>
                  </View>
                )}
                
                <View style={styles.activityContainer}>
                  <View style={styles.timelineLeft}>
                    <View style={[styles.dot, { backgroundColor: activity.color }]} />
                    {index < activities.length - 1 && <View style={styles.line} />}
                  </View>

                  <TouchableOpacity style={styles.activityCard}>
                    <View style={styles.activityHeader}>
                      <Clock size={14} color="#6b7280" />
                      <Text style={styles.time}>{activity.time}</Text>
                    </View>
                    <Text style={styles.activityTitle}>{activity.title}</Text>
                    <Text style={styles.activityDescription}>{activity.description}</Text>
                    
                    {isEditing && (
                      <TouchableOpacity style={styles.deleteButton}>
                        <Text style={styles.deleteText}>Remove</Text>
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>

        {!isEditing && (
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton}>
              <Users size={20} color="#000" />
              <Text style={styles.actionText}>Invite Members</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Share Itinerary</Text>
            </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 48,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerEditing: {
    backgroundColor: '#C8D400',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editButton: {
    fontSize: 16,
    color: '#3b82f6',
    fontWeight: '600',
  },
  editButtonActive: {
    color: '#000',
  },
  tripInfo: {
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    fontSize: 12,
    color: '#6b7280',
  },
  content: {
    flex: 1,
  },
  timeline: {
    padding: 16,
  },
  dayHeader: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 16,
    marginLeft: 40,
  },
  dayText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#374151',
  },
  activityContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timelineLeft: {
    width: 40,
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 8,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: '#e5e7eb',
    marginTop: 4,
  },
  activityCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  activityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: '#6b7280',
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  activityDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  deleteButton: {
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fee2e2',
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  deleteText: {
    fontSize: 12,
    color: '#dc2626',
    fontWeight: '600',
  },
  actions: {
    padding: 16,
    gap: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    gap: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  actionText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
