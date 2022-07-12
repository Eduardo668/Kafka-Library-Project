import {StyleSheet, Text, View} from 'react-native';
import Form from './Form';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native-web';

const Login = ({ navigation })=>{
    return(
        <LinearGradient 
        style={styles.bgColor}
        start={{x:0,y:3.5}}
        end={{x:3.8,y:0}}
        locations={[.1,5.0]}
        colors={['#0F18F9','#6166E0']}
    >  
        <View style={styles.container} >
            
            <View style={styles.header}>
            <Text style={
                styles.backBtn
            } onPress={()=> navigation.navigate('Initial')} >Back</Text>
             <Text  style={styles.title}>Sign In</Text>
            </View>
            <View style={styles.body}>
                <Form />
            </View>
            
        </View>
        </LinearGradient>
    )
}

// let width = Dimensions.
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
    },
    title:{
        color: "white", 
        fontSize: 60,
        fontWeight: 'bold'
        
 
    },
    backBtn: {
        position: 'absolute',
        bottom: 200,
        right: 350
    }
})

export default Login;



