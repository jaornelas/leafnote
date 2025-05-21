import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import auth, { getAuth } from '@react-native-firebase/auth';
import {firebaseApp } from '../firebaseConfig'; // Ensure this path is correct
import { sign } from 'crypto';

export default function AuthScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const auth = getAuth(firebaseApp);
    // Check if email and password are provided
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Create Note');
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  }
  const handleSignUp = async () => {
    const auth = getAuth(firebaseApp);
    // Check if email and password are provided
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Create Note');
    } catch (error) {
      Alert.alert('Sign Up Failed', error.message);
    }
  }
  const handleForgotPassword = async () => {
    const auth = getAuth(firebaseApp);
    // Check if email is provided
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Password Reset', 'Check your email for password reset instructions');
    } catch (error) {
      Alert.alert('Reset Failed', error.message);
    }
  }
  const handleLogout = async () => {
    const auth = getAuth(firebaseApp);
    // Check if user is logged in
    try {
      await signOut(auth);
      Alert.alert('Logged Out', 'You have been logged out');
    } catch (error) {
      Alert.alert('Logout Failed', error.message);
    }
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 12, padding: 8, borderRadius: 4 }
});
