import {StyleSheet, Text, View} from 'react-native';
import FormEmail from './FormEmail';
import FormValidationCode from './FormValidationCode'
const ForgotYourPass = ()=>{
    return(
        <View style={styles.container} >
            
            <View style={styles.header}>
             <Text  style={styles.title}> Recovery Password</Text>
            </View>
            <View style={styles.body} >
                {/* <FormEmail /> */}
                <FormValidationCode/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    header:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width:"100%",
        height:"30%",
        backgroundColor: "transparent"
    },
    body: {
        justifyContent: "center",
        alignItems: "center",
        width:"100%",
        height:"80%",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius:20
    },title:{
        color: "white", 
        fontSize: 60,
        
 
    },
})

export default ForgotYourPass;