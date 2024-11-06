import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

// Import logo and feature icons
import logo from '../../assets/tuklas-logo.png';
import exploreIcon from '../../assets/explore-icon.png';
import learnIcon from '../../assets/learn-icon.png';
import connectIcon from '../../assets/connect-icon.png';
import aboutIcon from '../../assets/about.png';
import techHubIcon from '../../assets/tech-hub.png';
import chatIcon from '../../assets/chat.png';
import futureIcon from '../../assets/future.png';
import setCompetition from '../../assets/set-competition.png'; // Import the portrait image

const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image source={logo} style={styles.logo} />
      
      {/* Welcome Message */}
      <Text style={styles.title}>Tuklas</Text>
      <Text style={styles.subtitle}>Where Curiosity Leads to Connection.</Text>

      {/* Feature Highlights */}
      <View style={styles.featuresContainer}>
        <Link href="/explore" style={styles.feature}>
          <Image source={exploreIcon} style={styles.icon} />
          <Text style={styles.featureText}>Explore Topics</Text>
        </Link>
        <Link href="/learn" style={styles.feature}>
          <Image source={learnIcon} style={styles.icon} />
          <Text style={styles.featureText}>Learn at Your Pace</Text>
        </Link>
        <Link href="/mentors" style={styles.feature}>
          <Image source={connectIcon} style={styles.icon} />
          <Text style={styles.featureText}>Connect with Mentors</Text>
        </Link>
      </View>

      <View style={styles.featuresContainer}>
        <Link href="/about" style={styles.feature}>
          <Image source={aboutIcon} style={styles.icon} />
          <Text style={styles.featureText}>About Tuklas</Text>
        </Link>
        <Link href="/tech-hub" style={styles.feature}>
          <Image source={techHubIcon} style={styles.icon} />
          <Text style={styles.featureText}>Technology Hub</Text>
        </Link>
        <Link href="/chat" style={styles.feature}>
          <Image source={chatIcon} style={styles.icon} />
          <Text style={styles.featureText}>Chat with AI</Text>
        </Link>
      </View>

      <View style={styles.featuresContainer}>
        <Link href="/future-works" style={styles.feature}>
          <Image source={futureIcon} style={styles.icon} />
          <Text style={styles.featureText}>Future Works</Text>
        </Link>
      </View>

      {/* Portrait Image at the Bottom */}
      <Image source={setCompetition} style={styles.portrait} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f4f7',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  logo: {
    width: 120,
    height: 120,
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
    width: 100,
    height: 100,
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
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  techHubButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  techHubText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    textDecorationLine: 'none',
  },
  portrait: {
    width: 180,  
    height: 280, 
    margin: 20,
    padding: 20,
  },
  chatButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
