// components/ChatScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Message from './Message';
import InputBar from './InputBar';

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help?', fromBot: true },
  ]);

  const addMessage = (text) => {
    const newMessage = { id: messages.length + 1, text, fromBot: false };
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      const botResponse = { id: messages.length + 2, text: 'Okay', fromBot: true };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        <FlatList
          style={styles.chatContainer}
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Message text={item.text} fromBot={item.fromBot} />}
        />
        <InputBar onSend={addMessage} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
});

export default ChatScreen;
