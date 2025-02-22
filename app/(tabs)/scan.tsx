import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const requestPermission = async () => {
    if (Platform.OS === 'web') {
      // Web doesn't support camera access through Expo Camera
      setHasPermission(false);
      return;
    }
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleBarCodeScanned = () => {
    setScanned(true);
    setShowResult(true);
  };

  // Web alternative UI
  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <View style={styles.webContent}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800' }} 
            style={styles.webImage}
          />
          <Text style={styles.webTitle}>Mobile Only Feature</Text>
          <Text style={styles.webDescription}>
            The recycling scanner is available exclusively on our mobile app. Download the app on your phone to access this feature.
          </Text>
          <View style={styles.qrContainer}>
            <Image 
              source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://recyctrack.app' }}
              style={styles.qrCode}
            />
            <Text style={styles.qrText}>Scan to download the app</Text>
          </View>
        </View>
      </View>
    );
  }

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
          <Text style={styles.permissionButtonText}>Grant Camera Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View style={styles.overlay}>
          <View style={styles.scanFrame} />
          <Text style={styles.instructions}>
            Position the barcode within the frame
          </Text>
        </View>
      </Camera>

      {showResult && (
        <Animated.View 
          style={styles.resultContainer}
          entering={SlideInDown}
        >
          <View style={styles.materialInfo}>
            <Ionicons name="leaf" size={32} color="#34D399" />
            <Text style={styles.materialTitle}>Plastic Bottle (Type 1 PET)</Text>
            <Text style={styles.materialDescription}>
              Recyclable in most curbside programs. Remove cap and rinse before recycling.
            </Text>
          </View>

          <View style={styles.disposalSteps}>
            <Text style={styles.stepsTitle}>Disposal Steps:</Text>
            <View style={styles.step}>
              <Ionicons name="water" size={24} color="#60A5FA" />
              <Text style={styles.stepText}>1. Rinse thoroughly</Text>
            </View>
            <View style={styles.step}>
              <Ionicons name="trash-bin" size={24} color="#34D399" />
              <Text style={styles.stepText}>2. Place in recycling bin</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.confirmButton}
            onPress={() => {
              setScanned(false);
              setShowResult(false);
            }}
          >
            <Text style={styles.confirmButtonText}>Confirm Disposal</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanFrame: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: '#34D399',
    borderRadius: 20,
  },
  instructions: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  resultContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingBottom: 40,
  },
  materialInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  materialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginVertical: 10,
  },
  materialDescription: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  disposalSteps: {
    marginBottom: 20,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 10,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  stepText: {
    fontSize: 16,
    color: '#4B5563',
    marginLeft: 10,
  },
  confirmButton: {
    backgroundColor: '#34D399',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  permissionButton: {
    backgroundColor: '#34D399',
    padding: 20,
    borderRadius: 12,
    margin: 20,
  },
  permissionButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },
  // Web-specific styles
  webContent: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  webImage: {
    width: 300,
    height: 300,
    marginBottom: 30,
    borderRadius: 20,
  },
  webTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 10,
    textAlign: 'center',
  },
  webDescription: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    maxWidth: 400,
    marginBottom: 30,
  },
  qrContainer: {
    alignItems: 'center',
  },
  qrCode: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  qrText: {
    fontSize: 14,
    color: '#6B7280',
  },
});