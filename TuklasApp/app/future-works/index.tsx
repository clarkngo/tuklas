import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FutureWorks: React.FC = () => {
  const initiatives = [
    {
      title: 'Enhanced Personalized Learning Paths',
      description:
        'Implement AI-driven algorithms to create personalized learning paths for users based on their skills, interests, and progress. This feature would allow Tuklas to recommend courses and resources tailored to each user’s unique journey, enhancing engagement and learning outcomes.',
    },
    {
      title: 'Integrated Social Learning Community',
      description:
        'Introduce a social learning community within Tuklas where users can interact, share insights, and learn collaboratively. This feature could include discussion forums, mentor Q&A sessions, and project showcases to foster a supportive and engaging learning environment.',
    },
    {
      title: 'Gamification and Progress Tracking',
      description:
        'Incorporate gamification elements such as badges, levels, and progress tracking to motivate users to achieve their learning goals. A leaderboard and achievement system can help make learning more enjoyable and encourage consistent use of the Tuklas platform.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Future Initiatives for Tuklas</Text>
      {initiatives.map((initiative, index) => (
        <View key={index} style={styles.initiativeCard}>
          <Text style={styles.title}>{initiative.title}</Text>
          <Text style={styles.description}>{initiative.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  initiativeCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
});

export default FutureWorks;
