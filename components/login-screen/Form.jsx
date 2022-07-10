import { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Pressable, TouchableWithoutFeedback} from 'react-native';



const Form = ({ login })=>{


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const user_login = {
        "username": username,
        "user_password": password
    }

    

    return(
        <View style={styles.formContainer}>

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
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        width: 393,
        height: 530,
        flexDirection:"column",
        borderRadius: 20,
        backgroundColor: "#fff",
        justifyContent:"center",
        alignItems:"center",
        marginTop: "35%"
    },
    input: {
        padding: 15,
        width:"70%",
        fontSize:20 , 
        borderColor: 'rgba(48, 56, 246, 1.0)',
        borderWidth: 1,
        bottom: "10%",
        borderRadius: 20,
        margin: 20,
    },
    forgotYourPassword: {
        color: "#403F3F",
        bottom: "10%"
    },
    btnLogin: {
        padding: 20,
        width:150,
        backgroundColor:"#6166E0",
        borderRadius: 15,
        bottom: "6%"
        
    },
    btnLoginText: {
        color: "white",
        fontSize: 22,
        textAlign:"center"
    },
    linkCadastroPage: {
        color: "#403F3F",
        
    },
})

export default Form;