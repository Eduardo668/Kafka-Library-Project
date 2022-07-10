import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './components/login-screen/Login';
import Cadastro from './components/cadastro-screen/Cadastro'
export default function App() {

  const font_path = require('./assets/fonts/Olive Days.ttf')

  return (
    <LinearGradient 
        style={stylesMain.bgColor}
        start={{x:0,y:3.5}}
        end={{x:3.8,y:0}}
        locations={[.1,5.0]}
        colors={['#0F18F9','#6166E0']}
    >
      <View>
        <Cadastro font={font_path} />
        {/* <Login /> */}
      </View>
    </LinearGradient>
    
  );
}

const stylesMain = StyleSheet.create({
    bgColor: {
      width: "100%",
      height: "100%"
    }
})
