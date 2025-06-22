import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!email || !password) {
      Alert.alert('Please enter both email and password');
      return;
    }else if (!email.includes('@')) {
      Alert.alert('Please enter a valid email address');
      return;
    }else if (password.length < 6) {
      Alert.alert('Password must be at least 6 characters long');
      return;
    }
    // Add signup logic here
    navigation.navigate('Home'); // Navigate to Home screen on successful signup
    Alert.alert('Signup successful!'); // Show success message
  };

  return (
    <View style={styles.container}>
       <Image
              source={require('../../assets/Logo.png')}
              style={styles.logo}
            />
      <TextInput
        style={styles.input}
        placeholderTextColor={'gray'}
        placeholder="First Name"
        // onChangeText={setEmail}
        // value={email}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={"gray"}
        placeholder="Last Name"
        // onChangeText={setLastName}
        // value={lastName}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor={"gray"}
        placeholder="Email"
        // onChangeText={setEmail}
        // value={email}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={"gray"}
        placeholder="Password"
        secureTextEntry
        // onChangeText={setPassword}
        // value={password}
      />
      <Button title="Sign Up" onPress={handleSignup} />
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Text>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  link: {
    marginTop: 15,
    color: 'blue',
    textAlign: 'center',
  },
});
