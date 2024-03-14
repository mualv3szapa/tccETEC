import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from './src/components/Container/Container';
import { Header } from './src/components/Header/Header';

export default function App() {
  return (
    <Container>
      <Header source={require("./src/assets/logoTcc.png")}/>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
