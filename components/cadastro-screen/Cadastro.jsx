import { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Pressable, TouchableWithoutFeedback, Image} from 'react-native';
import { useFonts } from 'expo-font';
import FormCredencias from './FormCredenciais';
import FormPhotoAndUsername from './FormPhotoAndUsername'
import FormFavoriteBook from './FormFavoriteBook';

const Cadastro = ({ font })=>{
    // const [loaded] = useFonts({
    //    OliveDays: font,
    //   });

    
    

    return(
      <View>
          <View style={styles.body}>
              
              <Text  style={styles.title}>Sign Up</Text>
          </View>
          <View style={styles.body1}>
              {/* <FormCredencias /> */}
              {/* <FormPhotoAndUsername /> */}
              <FormFavoriteBook />
          </View>
      </View>
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
        
 
    },
    

})


