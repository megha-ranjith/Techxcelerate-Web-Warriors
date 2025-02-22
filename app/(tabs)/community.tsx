import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const leaderboard = [
  {
    id: 1,
    name: 'Sarah Johnson',
    points: 2500,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    rank: 1,
  },
  {
    id: 2,
    name: 'Michael Chen',
    points: 2350,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    rank: 2,
  },
  {
    id: 3,
    name: 'Emily Davis',
    points: 2200,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    rank: 3,
  },
];

const challenges = [
  {
    id: 1,
    title: 'Zero Waste Week',
    participants: 1234,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800',
    daysLeft: 5,
  },
  {
    id: 2,
    title: 'Plastic Free Challenge',
    participants: 856,
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800',
    daysLeft: 3,
  },
];

export default function CommunityScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Community</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="#4B5563" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Leaderboard</Text>
        <View style={styles.leaderboardContainer}>
          {leaderboard.map((user) => (
            <View key={user.id} style={styles.leaderboardItem}>
              <Text style={styles.rank}>#{user.rank}</Text>
              <Image source={{ uri: user.avatar }} style={styles.avatar} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userPoints}>{user.points} points</Text>
              </View>
              {user.rank === 1 && (
                <Ionicons name="trophy" size={24} color="#F59E0B" />
              )}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Challenges</Text>
        {challenges.map((challenge) => (
          <TouchableOpacity key={challenge.id} style={styles.challengeCard}>
            <Image source={{ uri: challenge.image }} style={styles.challengeImage} />
            <View style={styles.challengeContent}>
              <Text style={styles.challengeTitle}>{challenge.title}</Text>
              <View style={styles.challengeStats}>
                <View style={styles.stat}>
                  <Ionicons name="people" size={16} color="#6B7280" />
                  <Text style={styles.statText}>{challenge.participants} participants</Text>
                </View>
                <View style={styles.stat}>
                  <Ionicons name="time" size={16} color="#6B7280" />
                  <Text style={styles.statText}>{challenge.daysLeft} days left</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Join Challenge</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Achievements</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.achievementsScroll}>
          {[1, 2, 3].map((badge) => (
            <View key={badge} style={styles.achievementCard}>
              <View style={styles.badgeIcon}>
                <Ionicons name="ribbon" size={32} color="#34D399" />
              </View>
              <Text style={styles.badgeTitle}>Eco Warrior</Text>
              <Text style={styles.badgeDescription}>Recycled 100 items</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
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
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  filterButton: {
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 15,
  },
  leaderboardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  rank: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B5563',
    width: 40,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
  userPoints: {
    fontSize: 14,
    color: '#6B7280',
  },
  challengeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  challengeImage: {
    width: '100%',
    height: 150,
  },
  challengeContent: {
    padding: 15,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 10,
  },
  challengeStats: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  statText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 5,
  },
  joinButton: {
    backgroundColor: '#34D399',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  achievementsScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  achievementCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    marginRight: 15,
    alignItems: 'center',
    width: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  badgeIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#ecfdf5',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  badgeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 5,
  },
  badgeDescription: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
});