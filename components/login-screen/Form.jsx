import { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Pressable, TouchableWithoutFeedback} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Form = ({ login })=>{


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const user_login = {
        "username": username,
        "user_password": password
    }

    

    return(
        <KeyboardAwareScrollView
        resetScrollToCoords={{x:0, y: 0 }}
        contentContainerStyle={styles.formContainer}
        scrollEnabled={false}
         >

            <TextInput 
             style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={text=> setUsername(text) }
            />

            <TextInput
             secureTextEntry={true}
             style={styles.input}
             placeholder="Password"
             value={password}
             onChangeText={text=>setPassword(text)}
            />

            <TouchableWithoutFeedback>
                <Text style={styles.forgotYourPassword}>
                    forgot your password?
                </Text>
            </TouchableWithoutFeedback>

                <Pressable onPress={ ()=> login(user_login) } 
                 style={styles.btnLogin}
                 >
                    <Text style={styles.btnLoginText}>
                        Sign in
                    </Text>
                </Pressable>

            <TouchableWithoutFeedback
             onPress={()=> console.log("click")}
             >
                <Text style={styles.linkCadastroPage}>
                   Don't have an account?
                   Sign Up Here
                </Text>
            </TouchableWithoutFeedback>   
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    formContainer: {
       backgroundColor: "#fff",
       justifyContent:"center",
       alignItems: "center",
       
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
    forgotYourPassword: {
        color: "#403F3F",
        margin:20
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
    linkCadastroPage: {
        color: "#403F3F",
        margin: 20
        
    },
})

export default Form;