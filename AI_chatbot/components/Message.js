// components/Message.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ text, fromBot }) => {
  return (
    <View style={[styles.messageContainer, fromBot ? styles.botMessage : styles.userMessage]}>
      <Text style={styles.messageText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  botMessage: {
    backgroundColor: '#90EE90',
    alignSelf: 'flex-start',
  },
  userMessage: {
    backgroundColor: '#E5E5EA',
    alignSelf: 'flex-end',
  },
  messageText: {
    color: '#000',
  },
});

export default Message;
