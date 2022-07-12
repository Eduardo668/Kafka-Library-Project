import { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Pressable, TouchableWithoutFeedback, Image} from 'react-native';
import { useFonts } from 'expo-font';
import FormCredencias from './FormCredenciais';
import FormPhotoAndUsername from './FormPhotoAndUsername'
import FormFavoriteBook from './FormFavoriteBook';
import { LinearGradient } from 'expo-linear-gradient';
const Cadastro = ({ font })=>{
    // const [loaded] = useFonts({
    //    OliveDays: font,
    //   });

    
    

    return(
        <LinearGradient 
        style={styles.bgColor}
        start={{x:0,y:3.5}}
        end={{x:3.8,y:0}}
        locations={[.1,5.0]}
        colors={['#0F18F9','#6166E0']}
    >  
      <View>
          <View style={styles.body}>
              
              <Text  style={styles.title}>Sign Up</Text>
          </View>
          <View style={styles.body1}>
              <FormCredencias />
              {/* <FormPhotoAndUsername /> */}
              {/* <FormFavoriteBook /> */}
          </View>
      </View>
      </LinearGradient>
    )

}
export default Cadastro;


const styles = StyleSheet.create({
    container: {
           
    },
    body: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width:"100%",
        height:"20%",
        backgroundColor: "transparent"

    },
     body1: {
        justifyContent: "center",
        alignItems: "center",
        width:"100%",
        height:"80%",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius:20

    },
    title:{
        color: "white", 
        fontSize: 60,
        fontWeight: 'bold'
        
 
    },
    

})


