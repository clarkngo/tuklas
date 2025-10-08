import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const skills = [
  {
    id: '1',
    name: 'AI & Machine Learning',
    description: 'Understand the basics of AI, including how machine learning models work and can be applied.',
    subTopics: [
      'Introduction to AI & ML Concepts',
      'Supervised and Unsupervised Learning',
      'Deep Learning Basics',
      'Model Training and Evaluation',
      'Real-World Applications of AI & ML'
    ]
  },
  {
    id: '2',
    name: 'Full-Stack Development',
    description: 'Learn to build both front-end and back-end applications, connecting users with data.',
    subTopics: [
      'Frontend Basics (HTML, CSS, JavaScript)',
      'Backend Development (Node.js, Express)',
      'Connecting Frontend & Backend',
      'Database Management (SQL, NoSQL)',
      'Deploying Full-Stack Applications'
    ]
  },
  {
    id: '3',
    name: 'Event Management',
    description: 'Master the essentials of planning and managing successful events, from logistics to execution.',
    subTopics: [
      'Planning an Event from Scratch',
      'Logistics and Resource Management',
      'Budgeting and Cost Control',
      'On-Site Event Coordination',
      'Post-Event Review and Feedback'
    ]
  },
  {
    id: '4',
    name: 'Creative Direction',
    description: 'Develop the skills to lead creative projects, from concept development to final execution.',
    subTopics: [
      'Concept Development & Storytelling',
      'Visual and Graphic Design Basics',
      'Content Creation for Marketing',
      'Managing Creative Teams',
      'Evaluating Creative Work'
    ]
  },
  {
    id: '5',
    name: 'Data Engineering',
    description: 'Learn to manage and structure data for effective use in analytics and machine learning.',
    subTopics: [
      'Data Pipeline Basics',
      'Data Transformation Techniques',
      'ETL (Extract, Transform, Load) Processes',
      'Data Storage Solutions',
      'Data Quality and Integrity'
    ]
  }
];

const LearnScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {skills.map((skill) => (
        <View key={skill.id} style={styles.card}>
          <Text style={styles.skillName}>{skill.name}</Text>
          <Text style={styles.skillDescription}>{skill.description}</Text>
          <View style={styles.subTopicsContainer}>
            {skill.subTopics.map((subTopic, index) => (
              <Text key={index} style={styles.subTopic}>
                {index + 1}. {subTopic}
              </Text>
            ))}
          </View>
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
  skillName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8
  },
  skillDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10
  },
  subTopicsContainer: {
    marginTop: 8
  },
  subTopic: {
    fontSize: 14,
    color: '#555',
    paddingLeft: 10,
    marginBottom: 5
  }
});

export default LearnScreen;
