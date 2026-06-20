import React, { useEffect, useRef } from 'react';
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function StartScreen() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.08,
          duration: 8000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 8000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <LinearGradient
      colors={['#FFF8F3', '#FDEFE5', '#FFF5EE']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.imageContainer,
            {
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <ImageBackground
            source={require('../assets/images/image-1.jpg')}
            style={styles.backgroundImage}
          >
            <View style={styles.overlay} />
          </ImageBackground>
        </Animated.View>

        <LinearGradient
          colors={['transparent', '#FFF8F3']}
          style={styles.bottomFade}
        />
        <View style={styles.content}>
          <Text style={styles.templeName}>Sri Mutharaman Temple</Text>
          <Text style={styles.subtitle}>நம் ஊர் • நம் கோவில்</Text>
          <Text style={styles.om}>🕉</Text>
          <Text style={styles.quote}>
            May the divine bless every devotee who enters.
          </Text>
          <TouchableOpacity style={styles.welcomeButton}>
            <Text style={styles.welcomeText}>WELCOME</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F3',
  },
  imageContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  bottomFade: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '5%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  templeName: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 25,
    opacity: 0.9,
  },
  om: {
    fontSize: 50,
    marginBottom: 20,
  },
  quote: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  welcomeButton: {
    backgroundColor: '#F97316',
    paddingHorizontal: 50,
    paddingVertical: 16,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  welcomeText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
