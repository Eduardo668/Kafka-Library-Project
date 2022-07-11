import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './components/login-screen/Login';
import Cadastro from './components/cadastro-screen/Cadastro'
import ForgotYourPass from './components/forgot-pass-screen/ForgotYourPass';
import Navbar from './components/Navbar';
import Home from './components/home-screen/Home';
import React from 'react-native'
import { useLayoutEffect } from 'react';
import Stack

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
        {/* <Cadastro font={font_path} /> */}
        {/* <Login /> */}
        {/* <ForgotYourPass /> */}
        


        <View style={stylesMain.body} >
          <Home />
        </View>
        <View style={stylesMain.footer} >
             <Navbar />
        </View>

        
      </View>
    </LinearGradient>
    
  );
}

const stylesMain = StyleSheet.create({
    bgColor: {
      width: "100%",
      height: "100%"
    },
    body: {
      backgroundColor: 'transparent',
      flexDirection: "column",
      width: "100%",
      height: "87%"
    },
    footer: {
      backgroundColor: "#1D1D1D",
      flexDirection: "column",
      width: "100%",
      height: "13%"
    }
})
