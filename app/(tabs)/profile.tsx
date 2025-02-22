import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#34D399', '#10B981']}
        style={styles.header}
      >
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Sarah Johnson</Text>
          <Text style={styles.level}>Level 12 Eco Warrior</Text>
        </View>
      </LinearGradient>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="leaf" size={24} color="#34D399" />
          <Text style={styles.statValue}>245</Text>
          <Text style={styles.statLabel}>Items Recycled</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="trophy" size={24} color="#F59E0B" />
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>Challenges Won</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="earth" size={24} color="#60A5FA" />
          <Text style={styles.statValue}>52kg</Text>
          <Text style={styles.statLabel}>CO₂ Saved</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Monthly Impact Report</Text>
        <View style={styles.reportCard}>
          <View style={styles.reportHeader}>
            <Text style={styles.reportTitle}>March 2025</Text>
            <TouchableOpacity style={styles.shareButton}>
              <Ionicons name="share-social" size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <View style={styles.reportStats}>
            <View style={styles.reportStat}>
              <Text style={styles.reportStatValue}>+25%</Text>
              <Text style={styles.reportStatLabel}>Recycling Rate</Text>
            </View>
            <View style={styles.reportStat}>
              <Text style={styles.reportStatValue}>-15kg</Text>
              <Text style={styles.reportStatLabel}>Waste Reduction</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Eco Tips</Text>
        <View style={styles.tipCard}>
          <Ionicons name="bulb" size={24} color="#F59E0B" />
          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>Reduce Plastic Usage</Text>
            <Text style={styles.tipDescription}>
              Based on your recycling history, try using reusable containers instead of single-use plastics.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.settingsContainer}>
          {['Notifications', 'Privacy', 'Connected Accounts', 'Help & Support'].map((item) => (
            <TouchableOpacity key={item} style={styles.settingsItem}>
              <Text style={styles.settingsText}>{item}</Text>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </TouchableOpacity>
          ))}
        </View>
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
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  profileInfo: {
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 15,
  },
  level: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: -30,
   },
  statCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 5,
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
  reportCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
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
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1F2937',
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  shareButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 8,
    borderRadius: 8,
  },
  reportStats: {
    flexDirection: 'row',
    padding: 15,
  },
  reportStat: {
    flex: 1,
    alignItems: 'center',
  },
  reportStatValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34D399',
  },
  reportStatLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 5,
  },
  tipCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tipContent: {
    flex: 1,
    marginLeft: 15,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 5,
  },
  tipDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  settingsContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
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
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  settingsText: {
    fontSize: 16,
    color: '#1F2937',
  },
});