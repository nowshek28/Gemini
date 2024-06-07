// components/InputBar.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const InputBar = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Type a message..."
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',  // Ensure the button and input are aligned
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#f1f1f1',
  },
});

export default InputBar;
