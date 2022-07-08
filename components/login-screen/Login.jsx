import {StyleSheet, Text, View} from 'react-native';
import Form from './Form';

const Login = ()=>{

    const getUserLogin = (user_data)=>{
        console.log(user_data)
    }

    return (
        <View style={page.loginPage}>
            <Text style={page.title}>Sign in</Text>
            <Form login={ getUserLogin }/>
            

        </View>
    )
}   

export default Login;

const page = StyleSheet.create({
    loginPage: {
        flexDirection:"column",
        justifyContent: "center",
        alignItems:"center"
    },
    title:{
       color: "white",
       fontSize: 60,
       top: "10%"
    }
   
})


