import { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Pressable, TouchableWithoutFeedback} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const FormEmail = ()=>{
    return (
        <KeyboardAwareScrollView
            resetScrollToCoords={{x:0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={false} 
        >
             <Text style={styles.requestEmailText} >
                Type your email for us help you
                to recover your password
            </Text>
            <TextInput
             style={styles.input}
             placeholder="Email"
            />
             <Pressable
                 style={styles.btnLogin}
                 >
                    <Text style={styles.btnLoginText}>
                        Send
                    </Text>
                </Pressable>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      top: 50
      
    },
    requestEmailText: {
        fontSize: 20
    },input: {
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
        margin: 30
        
        
    },
    btnLoginText: {
        color: "white",
        fontSize: 22,
        textAlign:"center"
    },
})

export default FormEmail;