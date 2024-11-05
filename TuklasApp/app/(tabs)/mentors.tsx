import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Link } from 'expo-router';

const mentors = [
  {
    id: '1',
    name: 'Clark Ngo',
    bio: 'AI Engineer and Software Developer with a strong background in building RAG systems, IT consulting, and full-stack development.',
    skills: ['AI & Machine Learning', 'Full-Stack Development', 'Data Engineering'],
    image: require('../../assets/clark-ngo.png'), // Corrected image path
    linkedin: 'https://www.linkedin.com/in/clarkngo', // LinkedIn URL for Clark
    page: 'clark'
  },
  {
    id: '2',
    name: 'Christine Emano',
    bio: 'Founder, event manager, and creative director with expertise in event production, project management, and social media marketing.',
    skills: ['Event Management', 'Project Coordination', 'Creative Direction'],
    image: require('../../assets/christine-emano.png'), // Corrected image path
    linkedin: 'https://www.linkedin.com/in/christineemano', // LinkedIn URL for Christine
    page: 'christine'
  }
];

const MentorsScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {mentors.map((mentor) => (
        <TouchableOpacity 
          key={mentor.id} 
          style={styles.card} 
          onPress={() => {/* Navigate to mentor detail page */}
          }>
          <Link href={`/mentor/${mentor.page}`} asChild>
            <View key={mentor.id} style={styles.card}>
              <Image source={mentor.image} style={styles.image} />
              <Text style={styles.name}>{mentor.name}</Text>
              <Text style={styles.bio}>{mentor.bio}</Text>
              <View style={styles.skillsContainer}>
                {mentor.skills.map((skill, index) => (
                  <Text key={index} style={styles.skill}>
                    {skill}
                  </Text>
                ))}
              </View>
              {/* LinkedIn Button */}
              {mentor.linkedin && (
                <TouchableOpacity
                  onPress={() => Linking.openURL(mentor.linkedin)}
                  style={styles.linkedinButton}
                >
                  <Text style={styles.linkedinText}>Connect on LinkedIn</Text>
                </TouchableOpacity>
              )}
            </View>
          </Link>
        </TouchableOpacity>
        ))}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 8
  },
  skill: {
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
    margin: 4
  },
  linkedinButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#0077b5', // LinkedIn blue color
    borderRadius: 5
  },
  linkedinText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default MentorsScreen;
