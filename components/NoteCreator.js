import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Geolocation from '@react-native-community/geolocation';

export default function NoteCreator() {
  const [message, setMessage] = useState('');

  const handleCreateNote = () => {
    Geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        firestore().collection('notes').add({
          senderId: 'sample-user-id',
          recipientId: 'friend-user-id',
          message,
          lat: latitude,
          lng: longitude,
          createdAt: new Date()
        }).then(() => {
          Alert.alert('Note created!');
          setMessage('');
        });
      },
      error => Alert.alert('Error getting location', error.message),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your message"
        value={message}
        onChangeText={setMessage}
        style={styles.input}
      />
      <Button title="Create Note" onPress={handleCreateNote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 12, borderRadius: 4 }
});
