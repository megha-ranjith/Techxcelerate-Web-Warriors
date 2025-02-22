import { View, Text, StyleSheet, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Link } from 'expo-router';
import Animated, { FadeInRight } from 'react-native-reanimated';

const slides = [
  {
    id: 1,
    title: 'Track Your Impact',
    description: 'Monitor your recycling habits and see the difference you make in the world.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800',
  },
  {
    id: 2,
    title: 'Earn Rewards',
    description: 'Get points for every item you recycle and redeem them for exclusive rewards.',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800',
  },
  {
    id: 3,
    title: 'Join the Community',
    description: 'Connect with like-minded people and participate in eco-challenges.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
  },
];

export default function OnboardingScreen() {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Animated.View 
            style={[styles.slide, { width }]}
            entering={FadeInRight.delay(index * 100)}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </Animated.View>
        )}
      />
      
      <View style={styles.footer}>
        <Link href="/auth/signup" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/auth/login" asChild>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>I already have an account</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    padding: 20,
    paddingBottom: 40,
  },
  button: {
    backgroundColor: '#34D399',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#6B7280',
    fontSize: 16,
  },
});