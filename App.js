import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './components/login-screen/Login';
import Cadastro from './components/cadastro-screen/Cadastro'
import ForgotYourPass from './components/forgot-pass-screen/ForgotYourPass';
import Home from './components/home-screen/Home';
import React from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as NavigationBar from 'expo-navigation-bar';
import Store from './components/store-screen/Store'
import Account from './components/account-screen/Account';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from 'react-native-vector-icons/AntDesign'
import News from './components/news-screen/News';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


export default function App() {
  
  // const navigationBarVisibility = NavigationBar.setVisibilityAsync("hidden")
  
  const font_path = require('./assets/fonts/Olive Days.ttf')

  return (
    
      <View style={{backgroundColor: '#1D1D1D'}}>
        {/* <Cadastro font={font_path} /> */}
        {/* <Login /> */}
        {/* <ForgotYourPass /> */}
        


        <View style={stylesMain.body} >
         {/* <NavigationContainer>
           <Stack.Navigator
              screenOptions={{headerShown: false}}
           >
              <Stack.Screen
               options={{headerShown: false, }} 
              name='Home' component={Home}  />
              <Stack.Screen
               options={{
                 headerShown: false
               }}
               name="Store" component={Store}
              />
              <Stack.Screen 
                  options={{headerShown: false}} 
                  name="Account"
                  component={Account}  
            
              />
              <Stack.Screen 
                  options={{headerShown: false}} 
                  name="Cadastro"
                  component={Cadastro}  
            
              />
           </Stack.Navigator>
         </NavigationContainer> */}
          <NavigationContainer>
            <Tab.Navigator>
                 <Tab.Screen 
                 options={{
                   headerShown: false,
                   tabBarIcon: ({focused, color, size}) => {
                        return <HomeIcon name='home' size={30} color={'white'} />
                        
                   },
                   tabBarStyle: stylesMain.tabBarStyle,
                   tabBarActiveTintColor: 'white',
                   
                   
                   

                 }} name="Home"
                  component={Home} 
                   
                />

                 <Tab.Screen options={{
                   headerShown: false,
                   tabBarIcon: ({focused, color, size}) => {
                    return <HomeIcon name='shoppingcart' size={30} color={'white'} />
                    
               },
               tabBarStyle: stylesMain.tabBarStyle,
               tabBarActiveTintColor: 'white',
               tabBarHideOnKeyboard: true
                 }} name="Store" component={Store} 
                 />

              <Tab.Screen options={{
                   headerShown: false,
                   tabBarIcon: ({focused, color, size}) => {
                    return <HomeIcon name='filetext1' size={25} color={'white'} />
                    
               },
               tabBarStyle: stylesMain.tabBarStyle,
               tabBarActiveTintColor: 'white',
               tabBarHideOnKeyboard: true
                 }} name="News" component={News} 
              />

                 <Tab.Screen options={{
                   headerShown: false,
                   tabBarIcon: ({focused, color, size}) => {
                    return <HomeIcon name='user' size={30} color={'white'} />
                    
               },
               tabBarStyle: stylesMain.tabBarStyle,
               tabBarActiveTintColor: 'white',
                 }} name="Account" component={Account} />
            </Tab.Navigator>

            
                 
          </NavigationContainer>
        </View>

        
      </View>
    
    
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
      height: "100%"
    },
    tabBarStyle: {
       backgroundColor: '#1D1D1D',
       marginTop: 6,
       padding: 6
    }

    // footer: {
    //   backgroundColor: "#1D1D1D",
    //   flexDirection: "column",
    //   width: "100%",
    //   height: "10%"
    // },

})
