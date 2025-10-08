import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

// Import the Tuklas logo and images for various sections
import tuklasLogo from '../../assets/tuklas-logo.png';
import magellanDiscovery from '../../assets/magellan-discovery.png';
import tiniklingDance from '../../assets/tinikling-dance.png';
import clarkAndChristine from '../../assets/clark-and-christine.png';
import workshopImage from '../../assets/workshop.png';
import technicalImplementation from '../../assets/technical-implementation.png';  // Ensure this image is in your assets folder

const AboutScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Logo */}
      <View style={styles.logoContainer}>
        <Image source={tuklasLogo} style={styles.logo} />
      </View>

      {/* Section 1: About Tuklas */}
      <View style={styles.section}>
        <Text style={styles.heading}>1. Tuklas - Why the Name and Logo</Text>
        <Text style={styles.text}>
          "Tuklas" means "discover" in Filipino, capturing the essence of a quest for new knowledge or skills. The logo draws inspiration from the Philippines' rich history and cultural heritage.
        </Text>
        {/* Magellan Discovery Image */}
        <Image source={magellanDiscovery} style={styles.image} />
        <Text style={styles.text}>
          Our journey towards discovery resonates with the story of Magellan's expedition reaching the Philippines, symbolizing exploration and uncovering new frontiers.
        </Text>
        {/* Tinikling Dance Image */}
        <Image source={tiniklingDance} style={styles.image} />
        <Text style={styles.text}>
          Additionally, our logo takes inspiration from "Tinikling" — a traditional Filipino dance that requires coordination, adaptability, and rhythm. Just as dancers navigate the bamboo poles, our users can navigate through various skills and resources to achieve their personal and professional growth.
        </Text>
      </View>

      {/* Section 2: The Problem and Our Goals */}
      <View style={styles.section}>
        <Text style={styles.heading}>2. The Problem and Our Goals</Text>
        <Text style={styles.text}>
          There’s a gap between talented CityU graduate students with specialized skills and the communities that could benefit from their knowledge. CityU students are typically available for a short period (around 2 years), and meanwhile, various groups like startups, nonprofits, retirees, and career switchers need affordable, accessible, and practical knowledge to support their growth and adaptation. Currently, these needs are unmet, with limited access to personalized guidance or affordable training.
        </Text>
        {/* Clark and Christine Image */}
        <Image source={clarkAndChristine} style={styles.image} />
        <Text style={styles.text}>
          Our goal is to bridge this gap by connecting CityU students and faculty with individuals seeking knowledge. This initiative benefits students by providing real-world experience, and users gain valuable skills to enhance their personal and professional lives.
        </Text>
      </View>

      {/* Section 3: Our Solution */}
      <View style={styles.section}>
        <Text style={styles.heading}>3. Our Solution: How We Will Solve the Problem</Text>
        <Text style={styles.text}>
          We envision a platform that enables users to book one-on-one sessions or group workshops led by CityU students and faculty. To enhance the user experience, we incorporate an AI-powered Personalized Recommendation feature that matches users with sessions based on their skill level, interests, and objectives. This ensures that each user receives tailored guidance that aligns with their needs and goals.
        </Text>
        {/* Workshop Image */}
        <Image source={workshopImage} style={styles.image} />
        <Text style={styles.text}>
          The platform offers flexibility and inclusivity, with online sessions that can be adapted for a range of topics and skill levels. Users can explore various fields, from digital tools to project management, while students gain practical experience and build their résumés.
        </Text>
      </View>

      {/* Section 4: Technical Implementation */}
      <View style={styles.section}>
        <Text style={styles.heading}>4. Technical Implementation</Text>
        {/* Technical Implementation Image */}
        <Image source={technicalImplementation} style={styles.image} />
        <Text style={styles.text}>
          Our platform’s technical foundation includes modern web and mobile technologies, with a backend that supports scalable, AI-driven recommendations. Using tools like FastAPI and MongoDB, we implement an intelligent recommendation engine to analyze user profiles and preferences, continuously learning and improving with user feedback.
        </Text>
        <Text style={styles.text}>
          The AI component leverages user input — such as interests, skill levels, and goals — to make personalized recommendations. As users engage with sessions and workshops, the system refines its suggestions based on feedback and ratings. This feedback loop is essential to ensure that the recommendations evolve with the needs of each user group.
        </Text>
        <Text style={styles.text}>
          Our platform emphasizes security, scalability, and accessibility, aiming to create a seamless experience for both mentors and learners. By leveraging AI in a practical and user-centric way, we provide an engaging and effective learning journey for all users.
        </Text>
      </View>

      {/* Copyright Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 Tuklas. Contributors: Clark Ngo and Christine Emano.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  section: {
    marginBottom: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 15,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  footer: {
    marginTop: 30,
    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 14,
    color: '#777',
  },
});

export default AboutScreen;
