import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const topics = [
  {
    id: '1',
    title: 'AI & Machine Learning',
    description: 'Dive into the world of artificial intelligence and machine learning. Learn about how AI models are built, trained, and deployed, including advanced techniques for creating intelligent systems.',
    mentors: ['Clark Ngo']
  },
  {
    id: '2',
    title: 'Full-Stack Development',
    description: 'Explore full-stack development, covering both frontend and backend technologies. Understand how to build complete web and mobile applications from the ground up.',
    mentors: ['Clark Ngo']
  },
  {
    id: '3',
    title: 'Data Engineering',
    description: 'Learn the essentials of data engineering, including data pipeline design, data transformation, and storage solutions. This topic focuses on managing and structuring data effectively.',
    mentors: ['Clark Ngo']
  },
  {
    id: '4',
    title: 'Event Management',
    description: 'Get insights into event planning, from coordinating logistics to managing budgets and collaborating with vendors. Ideal for those interested in organizing successful events and brand activations.',
    mentors: ['Christine Emano']
  },
  {
    id: '5',
    title: 'Project Coordination',
    description: 'Understand the fundamentals of project coordination, including setting timelines, managing resources, and working with cross-functional teams to achieve project goals.',
    mentors: ['Christine Emano', 'Clark Ngo']
  },
  {
    id: '6',
    title: 'Creative Direction',
    description: 'Explore the art of creative direction, where you’ll learn to craft visual stories and brand identities. This includes skills in concept development, storytelling, and guiding creative projects from inception to completion.',
    mentors: ['Christine Emano']
  },
  {
    id: '7',
    title: 'Social Media Management',
    description: 'Discover strategies for managing and growing social media accounts. Learn about content creation, audience engagement, and analytics to build a compelling social media presence.',
    mentors: ['Christine Emano']
  },
  {
    id: '8',
    title: 'Production Management',
    description: 'Gain knowledge in overseeing production processes, whether for events, video, or print. This involves budgeting, scheduling, and ensuring that all deliverables meet quality standards.',
    mentors: ['Christine Emano']
  },
  {
    id: '9',
    title: 'DevOps',
    description: 'An introduction to DevOps practices, including managing deployment pipelines, automating workflows, and monitoring applications. This topic is essential for modern software development.',
    mentors: ['Clark Ngo']
  },
  {
    id: '10',
    title: 'Copywriting',
    description: 'Learn the principles of effective copywriting, including how to create engaging, persuasive text for marketing, events, and branding. Ideal for aspiring writers and marketers.',
    mentors: ['Christine Emano']
  }
];

const ExploreScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {topics.map((topic) => (
        <View key={topic.id} style={styles.card}>
          <Text style={styles.title}>{topic.title}</Text>
          <Text style={styles.description}>{topic.description}</Text>
          <Text style={styles.mentors}>Mentors: {topic.mentors.join(', ')}</Text>
        </View>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10
  },
  mentors: {
    fontSize: 12,
    color: '#333',
    fontStyle: 'italic'
  }
});

export default ExploreScreen;
