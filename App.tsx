import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.name}>Starkova Veronika</Text>
      <Text style={styles.likes}>Likes: {likes}</Text>
      <Pressable onPress={() => setLikes(likes + 1)} style={styles.button}>
        <Text style={styles.buttonText}>Like</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    marginTop: 8,
  },
  likes: {
    fontSize: 18,
    marginTop: 24,
  },
  button: {
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginTop: 12,
    borderRadius: 8,
    backgroundColor: '#1d4ed8',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
