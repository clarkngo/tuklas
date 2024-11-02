import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

// Import logo and feature icons
import logo from '../../assets/tuklas-logo.png';
import exploreIcon from '../../assets/explore-icon.png';
import learnIcon from '../../assets/learn-icon.png';
import connectIcon from '../../assets/connect-icon.png';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={logo} style={styles.logo} />
      
      {/* Welcome Message */}
      <Text style={styles.title}>Welcome to Tuklas!</Text>
      <Text style={styles.subtitle}>Discover new skills and knowledge with a fun and engaging experience.</Text>

      {/* Feature Highlights */}
      <View style={styles.featuresContainer}>
        <TouchableOpacity style={styles.feature} onPress={() => {}}>
          <Link href="/explore" style={styles.feature}>
            <Image source={exploreIcon} style={styles.icon} />
            <Text style={styles.featureText}>Explore Topics</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.feature} onPress={() => {}}>
          <Link href="/learn" style={styles.feature}>
            <Image source={learnIcon} style={styles.icon} />
            <Text style={styles.featureText}>Learn at Your Pace</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.feature} onPress={() => {}}>
          <Link href="/mentors" style={styles.feature}>
            <Image source={connectIcon} style={styles.icon} />
            <Text style={styles.featureText}>Connect with Mentors</Text>
          </Link>
        </TouchableOpacity>
      </View>

      {/* Get Started Button */}
      <Link href="/about" style={styles.button}>
        <Text style={styles.buttonText}>Learn More About Tuklas</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  logo: {
    width: 120,  // Increased size
    height: 120, // Increased size
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 40,
  },
  feature: {
    alignItems: 'center',
    width: 80,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  featureText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
