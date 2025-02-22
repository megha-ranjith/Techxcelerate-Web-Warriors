import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const rewards = [
  {
    id: 1,
    title: '$5 Coffee Voucher',
    points: 500,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
    partner: 'Local Coffee Co.',
  },
  {
    id: 2,
    title: 'Eco-friendly Water Bottle',
    points: 1000,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800',
    partner: 'Green Living',
  },
  {
    id: 3,
    title: '$20 Grocery Voucher',
    points: 2000,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800',
    partner: 'Organic Market',
  },
];

export default function RewardsScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#34D399', '#10B981']}
        style={styles.header}
      >
        <Text style={styles.title}>Your Rewards</Text>
        <View style={styles.pointsCard}>
          <Text style={styles.pointsLabel}>Available Points</Text>
          <Text style={styles.pointsValue}>1,250</Text>
          <TouchableOpacity style={styles.historyButton}>
            <Text style={styles.historyButtonText}>View History</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Available Rewards</Text>
        
        {rewards.map((reward) => (
          <TouchableOpacity key={reward.id} style={styles.rewardCard}>
            <Image source={{ uri: reward.image }} style={styles.rewardImage} />
            <View style={styles.rewardInfo}>
              <Text style={styles.rewardTitle}>{reward.title}</Text>
              <Text style={styles.partnerName}>{reward.partner}</Text>
              <View style={styles.pointsContainer}>
                <Ionicons name="star" size={16} color="#F59E0B" />
                <Text style={styles.pointsText}>{reward.points} points</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.redeemButton}>
              <Text style={styles.redeemButtonText}>Redeem</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
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
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  pointsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  pointsLabel: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 5,
  },
  pointsValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  historyButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  historyButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 15,
  },
  rewardCard: {
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
  rewardImage: {
    width: '100%',
    height: 150,
  },
  rewardInfo: {
    padding: 15,
  },
  rewardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 5,
  },
  partnerName: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 10,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 14,
    color: '#F59E0B',
    marginLeft: 5,
    fontWeight: '500',
  },
  redeemButton: {
    backgroundColor: '#34D399',
    padding: 15,
    alignItems: 'center',
  },
  redeemButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});