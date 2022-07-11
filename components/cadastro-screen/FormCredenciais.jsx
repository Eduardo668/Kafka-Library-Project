import { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Pressable, TouchableWithoutFeedback} from 'react-native';
import PhoneInput from 'react-native-phone-input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const FormCredencias = ()=>{
    
    const [visibility, setVisibility] = useState("flex");
    
    const stepByStep = StyleSheet.create({
        stepByStepContainer: {
            margin: 20,
            width: 100,
            flexDirection: "row",
            justifyContent: "space-evenly",
            display: visibility,

        }
    })


    return (
        <KeyboardAwareScrollView
        resetScrollToCoords={{x:0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
         >
            <View style={stepByStep.stepByStepContainer}>
                  <View style={styles.ball1}></View>
                  <View style={styles.ball2}></View>
                  <View style={styles.ball3}></View>
              </View>
            <TextInput 
             style={styles.input}
              placeholder="Full name"
            
            />

            <TextInput
             style={styles.input}
             placeholder="Email"
            />

            <TextInput
             secureTextEntry={true}
             style={styles.input}
             placeholder="Password"
            //  onFocus={()=>setVisibility("none")}
            //  onBlur={()=>setVisibility("flex")}
            //  value={password}
            //  onChangeText={text=>setPassword(text)}
            />

            <PhoneInput
             style={styles.input}
             placeholder="Phone"
            //  onFocus={()=>setVisibility("none")}
            //  onBlur={()=>setVisibility("flex")}
         
            />
            <Pressable
                 style={styles.btnLogin}
                 >
                    <Text style={styles.btnLoginText}>
                        Next
                    </Text>
                </Pressable>
        </KeyboardAwareScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
            backgroundColor: "#fff",
            justifyContent:"space-evenly",
            alignItems: "center"

            
    },
    input: {
        padding: 15,
        width:350,
        fontSize:20 , 
        borderColor: 'rgba(48, 56, 246, 1.0)',
        borderWidth: 1,
        
        borderRadius: 20,
        margin: 20,
    },
    btnLogin: {
        padding: 20,
        width:150,
        backgroundColor:"#6166E0",
        borderRadius: 15,
        
        
    },
    btnLoginText: {
        color: "white",
        fontSize: 22,
        textAlign:"center"
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
    }
})


export default FormCredencias;