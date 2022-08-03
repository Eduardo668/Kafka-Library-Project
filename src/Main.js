import {View, Text, SafeAreaView } from 'react-native';
import SafeAreaViewAndroid from './styles/SafeAreaViewAndroid';
import GlobalStyles from './styles/GlobalStyles';

const Main = ()=>{
    return (          
        <SafeAreaView
         style={
          SafeAreaViewAndroid.AndroidSafeArea} >
              
            

        </SafeAreaView>
    )
}

export default Main;