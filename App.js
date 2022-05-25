import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Screens/Welcome';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Welcome/>
    </>
  );
}


