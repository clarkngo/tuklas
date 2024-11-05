import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// Define the type for each message
type Message = {
  text: string;
  isUser: boolean;
};

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [currentAiMessage, setCurrentAiMessage] = useState(''); // Track current AI message

  const sendMessage = async (content: string = input) => {
    if (content.trim() === '') return;

    // Add user message to chat history
    setMessages([...messages, { text: content, isUser: true }]);
    setInput(''); // Clear input field

    // Start listening to the streaming AI response
    try {
      const response = await fetch('https://bookish-orbit-jr6vp4jjq4ghq49p-5000.app.github.dev/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gemma2:2b',
          messages: [{ role: 'user', content }],
        }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder('utf-8');
      let accumulatedMessage = '';

      while (true) {
        const { done, value } = await reader?.read()!;
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        
        // Parse each chunk, extract the "content" field, and update the AI message
        chunk.split('\n').forEach((line) => {
          if (line.trim()) {
            try {
              const parsedData = JSON.parse(line);
              const content = parsedData.message?.content;
              if (content) {
                accumulatedMessage += content; // Append content

                // Update current AI message on the screen in real-time
                setCurrentAiMessage(accumulatedMessage);
              }
            } catch (error) {
              console.error('Error parsing chunk:', error);
            }
          }
        });
      }

      // Add the full AI response to chat history
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: accumulatedMessage, isUser: false },
      ]);
      setCurrentAiMessage(''); // Reset current AI message

    } catch (error) {
      console.error('Error communicating with proxy server:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Error: Could not get a response from the server.', isUser: false },
      ]);
    }
  };

  const handlePromptSend = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AI Chat</Text>

      {/* Starter Prompt Buttons */}
      <View style={styles.promptContainer}>
        <TouchableOpacity onPress={() => handlePromptSend("What is Boeing's Unmanned aircraft systems?")} style={styles.promptButton}>
          <Text style={styles.promptButtonText}>What is Boeing's Unmanned aircraft systems?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePromptSend("What is Microsoft Fabric?")} style={styles.promptButton}>
          <Text style={styles.promptButtonText}>What is Microsoft Fabric?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePromptSend("What is Thought Leadership?")} style={styles.promptButton}>
          <Text style={styles.promptButtonText}>What is Thought Leadership?</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.chatContainer}>
        {messages.map((msg, index) => (
          <View key={index} style={[styles.message, msg.isUser ? styles.userMessage : styles.aiMessage]}>
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
        {/* Display the streaming AI message in real-time */}
        {currentAiMessage ? (
          <View style={styles.aiMessage}>
            <Text style={styles.messageText}>{currentAiMessage}</Text>
          </View>
        ) : null}
      </ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={input}
        onChangeText={setInput}
        onSubmitEditing={() => sendMessage()}
      />
      <TouchableOpacity onPress={() => sendMessage()} style={styles.sendButton}>
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
  promptContainer: {
    marginBottom: 20,
  },
  promptButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  promptButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
