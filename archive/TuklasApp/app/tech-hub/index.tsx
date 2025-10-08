// app/(tabs)/tech-hub.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const TechnologyScreen: React.FC = () => {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Technology Skills</Text>
      <Text style={styles.subtitle}>
        Enhance your technology skills with resources designed for the digital age.
      </Text>

      {/* Technology for Beginners */}
      <View style={styles.section}>
        <Text style={styles.heading}>Technology for Beginners</Text>

        <TouchableOpacity onPress={() => openLink('https://www.digitallearn.org/')}>
          <Text style={styles.link}>Digital Learn</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Explore short courses on essential digital skills, like computer basics, social media, recognizing online scams, and using Android devices.
        </Text>
        
        <TouchableOpacity onPress={() => openLink('https://digitalskillslibrary.org/')}>
          <Text style={styles.link}>Digital Skills Library</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Discover resources that support adult learners in developing essential digital skills.
        </Text>

        <TouchableOpacity onPress={() => openLink('https://applieddigitalskills.withgoogle.com/c/en/collections')}>
          <Text style={styles.link}>Grow with Google</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Lessons on using Google tools and building digital skills.
        </Text>

        <TouchableOpacity onPress={() => openLink('https://pbc.gov/mousercise/')}>
          <Text style={styles.link}>Mousercise</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Learn the basics of computer navigation with practice sessions.
        </Text>

        <TouchableOpacity onPress={() => openLink('https://www.techlifeunity.com/a-to-z-topics')}>
          <Text style={styles.link}>Techboomers</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Tutorials on popular apps and websites, from social media to travel and shopping.
        </Text>

        <TouchableOpacity onPress={() => openLink('https://techconnectwa.org/')}>
          <Text style={styles.link}>TechConnect</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Free virtual tech assistance for Washington residents, with support in multiple languages.
        </Text>

        <TouchableOpacity onPress={() => openLink('https://www.typingclub.com/')}>
          <Text style={styles.link}>Typing Club</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Typing tutorials and practice, with an option to track progress.
        </Text>
      </View>

      {/* Microsoft Learn */}
      <View style={styles.section}>
        <TouchableOpacity onPress={() => openLink('https://learn.microsoft.com/en-us/')}>
          <Text style={styles.link}>Microsoft Learn</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Gain Microsoft Office and tech skills with free online courses available to all Washington State residents.
        </Text>
      </View>

      {/* Northstar Digital Literacy */}
      <View style={styles.section}>
        <TouchableOpacity onPress={() => openLink('https://www.digitalliteracyassessment.org/launch-from/10973-2ZJF-spl')}>
          <Text style={styles.link}>Northstar Digital Literacy</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Assess and strengthen your computer skills for the workplace, school, and daily life through Northstar Digital Literacy.
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
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
    lineHeight: 22,
    marginBottom: 15,
  },
  link: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
});

export default TechnologyScreen;
