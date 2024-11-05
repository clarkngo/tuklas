import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// Define the type for each message
type Message = {
  text: string;
  isUser: boolean;
};

const ChatScreen: React.FC = () => {
  // Explicitly define messages as an array of Message objects
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    // Add user message to chat history
    setMessages([...messages, { text: input, isUser: true }]);
    setInput(''); // Clear input field

    // Send user message to the proxy server
    try {
      const response = await fetch('https://bookish-orbit-jr6vp4jjq4ghq49p-5000.app.github.dev/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gemma2:2b',
          messages: [{ role: 'user', content: input }],
        }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder('utf-8');
      let message = '';

      while (true) {
        const { done, value } = await reader?.read()!;
        if (done) break;

        message += decoder.decode(value, { stream: true });

        // Update the AI message in real-time
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          { text: message, isUser: false },
        ]);
      }
    } catch (error) {
      console.error('Error communicating with proxy server:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Error: Could not get a response from the server.', isUser: false },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AI Chat</Text>
      <ScrollView style={styles.chatContainer}>
        {messages.map((msg, index) => (
          <View key={index} style={[styles.message, msg.isUser ? styles.userMessage : styles.aiMessage]}>
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={input}
        onChangeText={setInput}
        onSubmitEditing={sendMessage}
      />
      <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  chatContainer: {
    flex: 1,
    marginBottom: 20,
  },
  message: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#d1e7dd',
    alignSelf: 'flex-end',
  },
  aiMessage: {
    backgroundColor: '#e2e3e5',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  sendButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatScreen;
