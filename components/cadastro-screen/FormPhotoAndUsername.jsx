import {StyleSheet, Text, View, TextInput, Pressable, TouchableWithoutFeedback, Image, Keyboard} from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const FormPhotoAndUsername = ()=>{

    const [visibility, setVisibility] = useState("flex");
    
    const [image, setImage] = useState("http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png");

    const stepByStep = StyleSheet.create({
        stepByStepContainer: {
            margin: 20,
            width: 100,
            flexDirection: "row",
            justifyContent: "space-evenly",
            display: visibility,

        }
    })
     
    const pickImage = async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        
        console.log(result);

        if (!result.cancelled){
            setImage(result.uri);
        }

    }


    return (
     <KeyboardAwareScrollView
     resetScrollToCoords={{x:0, y: 0 }}
     contentContainerStyle={styles.container}
     scrollEnabled={false}
     >
            <View style={stepByStep.stepByStepContainer}>
                  <View style={styles.ball2}></View>
                  <View style={styles.ball1}></View>
                  <View style={styles.ball3}></View>
              </View>
            <TextInput 
             style={styles.input}
              placeholder="Username"
            //   onFocus={()=>setVisibility("none")}
            //   onBlur={()=>setVisibility("flex")}
              
            />
            <Text style={styles.btnImageText}>
                Click in the circle down below to select a image from your galary
            </Text>
            <Pressable style={styles.imageBtn} onPress={ pickImage }>
            {image &&
                 <Image
                  style={styles.userImage} 
                  source={{uri: image, width:200,height:200 }}  />}
            </Pressable>
            
            <Pressable
                 style={styles.btnLogin}
                 onPress={
                    ()=> navigation.navigate('Form3')
                 }
                 >
                    <Text style={styles.btnLoginText}>
                        Next
                    </Text>
                </Pressable>
     </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        justifyContent:"space-evenly",
        alignItems: "center",
        
    },
    input: {
        padding: 15,
        width:350,
        fontSize:20 , 
        borderColor: 'rgba(48, 56, 246, 1.0)',
        borderWidth: 1,
        
        borderRadius: 20,
        
    },
    ball1: {
        width: 30,
        height: 30,
        bottom:10,
        backgroundColor: "#161DC6",
        borderRadius: 100
    },
    ball2: {
        width: 23,
        height: 23,
        backgroundColor: "#8287F4",
        borderRadius: 100
    },
    ball3: {
        width: 23,
        height: 23,
        backgroundColor: "#8287F4",
        borderRadius: 100
    },
    userImage: {
       backgroundColor: "#000",
       borderRadius: 300
    },
    imageBtn: {
        marginBottom: -20
    },
    btnImageText: {
       fontSize: 18,
       margin:30
    },
    btnLogin: {
        padding: 20,
        width:150,
        backgroundColor:"#6166E0",
        borderRadius: 15,
        margin: 40
        
        
    },
    btnLoginText: {
        color: "white",
        fontSize: 22,
        textAlign:"center"
    },
})

export default FormPhotoAndUsername;