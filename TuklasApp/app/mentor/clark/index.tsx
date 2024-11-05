import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ClarkMentorPage: React.FC = () => {
  const clarkSkills = {
    technology: {
        machineLearningAndAI: [
            "Retrieval Augmented Generation (RAG)",
            "MLflow",
            "ChromaDB",
            "Ollama"
        ],
        frameworksAndLibraries: [
            "React",
            "React Native",
            "Angular",
            "Node.js",
            "Spring",
            "Express",
            "FastAPI"
        ],
        programmingLanguages: ["Java", "JavaScript", "TypeScript", "Python"],
        databases: [
            "MongoDB",
            "NoSQL",
            "SQL",
            "Airtable",
            "DynamoDB",
            "Cosmos DB",
            "MySQL",
            "Elasticsearch"
        ],
        webDevelopment: ["MEAN Stack", "Django", "HTML5", "CSS", "RESTful API"],
        microservicesAndCloud: [
            "Amazon Web Services (AWS)",
            "Microsoft Azure",
            "Serverless Architecture",
            "Spring Cloud",
            "Docker"
        ],
        devTools: ["Git", "GitHub", "IntelliJ", "Jira", "Jenkins", "Maven"],
        developmentMethodologies: ["Agile", "Scrum", "Kanban"],
        devOpsAndAutomation: ["GitHub Actions", "CI/CD pipelines", "RabbitMQ"],
        dataProcessing: ["Spring Batch", "Gemma"],
        lowCodeDevelopment: ["Mendix Low-Code Platform"],
        cybersecurityTools: ["VPN", "DDNS", "Kali Linux"],
        digitalLiteracyTools: ["ServiceDesk", "ServiceNow", "Wireshark"]
    },
    music: {
        djSkills: [
        "80s, 90s, EDM, House, Trap, Hip-Hop, Moombahton genres",
        "Guest DJ on 94.7 Love Radio, 97.9 Home Radio",
        "Mixcloud for mixtapes"
        ],
        certification: ["Ableton Specialist (Berklee College of Music)"]
    },
    financeAndBusiness: {
        financialAnalysis: [
            "Translation and data extraction for financial statements",
            "Database maintenance for financial records"
        ],
        treasuryTrading: ["Foreign Exchange", "Bonds", "Stocks"],
        financialPlanning: ["Life insurance", "Endowment insurance"],
        insuranceSales: [
            "Motor insurance",
            "Travel insurance",
            "Fire and general liability insurance"
        ]
    }
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Tuklas Clark Ngo's Skills</Text>

      <View style={styles.section}>
        <Text style={styles.category}>Technology</Text>
        {Object.entries(clarkSkills.technology).map(([key, skills]) => (
          <View key={key} style={styles.skillGroup}>
            <Text style={styles.subheading}>{key.replace(/([A-Z])/g, ' $1')}</Text>
            <View style={styles.skillsList}>
              {(skills as string[]).map((skill, index) => (
                <Text key={index} style={styles.skill}>
                  • {skill}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.category}>Music</Text>
        {Object.entries(clarkSkills.music).map(([key, skills]) => (
          <View key={key} style={styles.skillGroup}>
            <Text style={styles.subheading}>{key.replace(/([A-Z])/g, ' $1')}</Text>
            <View style={styles.skillsList}>
              {(skills as string[]).map((skill, index) => (
                <Text key={index} style={styles.skill}>
                  • {skill}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.category}>Finance and Business</Text>
        {Object.entries(clarkSkills.financeAndBusiness).map(([key, skills]) => (
          <View key={key} style={styles.skillGroup}>
            <Text style={styles.subheading}>{key.replace(/([A-Z])/g, ' $1')}</Text>
            <View style={styles.skillsList}>
              {(skills as string[]).map((skill, index) => (
                <Text key={index} style={styles.skill}>
                  • {skill}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  category: {
    fontSize: 22,
    fontWeight: '600',
    color: '#007bff',
    marginBottom: 12,
    textAlign: 'left',
  },
  skillGroup: {
    marginBottom: 10,
    paddingLeft: 10,
  },
  subheading: {
    fontSize: 18,
    fontWeight: '500',
    color: '#555',
    marginBottom: 6,
  },
  skillsList: {
    paddingLeft: 10,
  },
  skill: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
});

export default ClarkMentorPage;
