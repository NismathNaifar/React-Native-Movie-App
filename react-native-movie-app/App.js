
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base'
import AppTopBar from './src/components/stacks/AppTopBar'
import { StyleSheet} from 'react-native';
import Header from './src/components/layout/Header'


export default function App() {
  return (
    <NativeBaseProvider>
        <Header />
        <AppTopBar />
        <StatusBar style='auto' />
    </NativeBaseProvider>
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
