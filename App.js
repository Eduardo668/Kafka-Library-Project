import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './components/login-screen/Login';

export default function App() {
  return (
    <LinearGradient 
        style={stylesMain.bgColor}
        start={{x:0,y:3.5}}
        end={{x:3.8,y:0}}
        locations={[.1,5.0]}
        colors={['#0F18F9','#6166E0']}
    >
      <View>
        <Login />
      </View>
    </LinearGradient>
    
  );
}

const stylesMain = StyleSheet.create({
    bgColor: {
      flex: 1
    }
})
