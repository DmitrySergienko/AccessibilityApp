import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Tts from 'react-native-tts';
import {RadioButton} from 'react-native-paper';

const App = () => {
  
  const handleTextPress = (text: string) => {
    if (checkedValue === 'on') {
      Tts.speak(text);
    }
  };

  const [checkedValue, setCheckedValue] = useState('off');

  const handleValueChange = (value: string) => {
    setCheckedValue(value);
    if (value === 'on') {
      Tts.speak('Accessibility is on');
    } else {
      Tts.speak('Accessibility is off');
    }
  };

  const MyScreen = () => {
    return (
      <View style={styles.content}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => handleTextPress('Welcome to My App')}>
            <Text style={styles.contentTitle}>Welcome to My App</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              handleTextPress('Any text based on the app content')
            }>
            <Text style={styles.contentText}>
              Any text based on the app content
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleTextPress('Get Started')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleTextPress('Accessibility')}>
          <Text style={styles.title}>Accessibility</Text>
        </TouchableOpacity>

        <View style={styles.radioBtStyle}>
          <View>
            <RadioButton.Group
              onValueChange={handleValueChange}
              value={checkedValue}>
              <RadioButton.Item label="off" value="off" />
              <RadioButton.Item label="on" value="on" />
            </RadioButton.Group>
          </View>
        </View>
      </View>

      <MyScreen />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Copyright © 2023 My App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  radioBtStyle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  contentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contentText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
});

export default App;
