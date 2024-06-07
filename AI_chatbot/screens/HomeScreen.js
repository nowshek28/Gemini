// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView,Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style= {styles.main}>
      <View style={styles.container}>
      <Image source={require('../assets/snack-icon.png')} />
      
      <Text style={styles.title}>Gemini AI Chatbot</Text>
      
      </View>
    
      <View style={styles.box}>
        <Button 
        title="Start Chat" 
        color="#00000"
        onPress={() => navigation.navigate('Chat')} />
      </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems: 'center',
    backgroundColor:"#ffffff"
  },

  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    color:'#000000',
  },
  box: {
    backgroundColor:'#90EE90',
    marginBottom:30,
    padding:4,
    borderRadius:10,
  },
});

export default HomeScreen;
