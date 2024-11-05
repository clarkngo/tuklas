// app/mentor/christine/index.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ChristineMentorPage: React.FC = () => {
  const christineSkills = {
    projectManagement: [
      "Project Management",
      "Event Management",
      "Project Coordination"
    ],
    productionSkills: [
      "Photo Shoot Production",
      "Video Production"
    ]
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Christine Emano's Teachable Skills</Text>

      <View style={styles.section}>
        <Text style={styles.category}>Project Management</Text>
        {christineSkills.projectManagement.map((skill, index) => (
          <Text key={index} style={styles.skill}>
            - {skill}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.category}>Production Skills</Text>
        {christineSkills.productionSkills.map((skill, index) => (
          <Text key={index} style={styles.skill}>
            - {skill}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f4f7',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 10,
  },
  skill: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
});

export default ChristineMentorPage;
