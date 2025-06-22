import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image, ToastAndroid } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
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
        navigation.navigate('Home'); // Navigate to Home screen on successful login
        ToastAndroid.show('Login successful!', ToastAndroid.SHORT);
        setTimeout(() => {
          // Dismiss alert after 1 second (Android only, iOS auto-dismisses)
        }, 1000);
         // Show success message
      };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Logo.png')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="gray"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="gray"
        placeholder='Password'
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button  title="Login" onPress={handleLogin} />
      <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Sign up
      </Text>
    </View>
  );
};

export default LoginScreen;

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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  placeholder: {
    color: 'black',
  },
  input: {
    color: 'black',
    width: '100%',
    alignSelf: 'center',
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
