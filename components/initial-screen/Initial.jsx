import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Initial = ({ navigation })=> {
    return(
    <LinearGradient 
        style={styles.bgColor}
        start={{x:0,y:3.5}}
        end={{x:3.8,y:0}}
        locations={[.1,5.0]}
        colors={['#0F18F9','#6166E0']}
    >  
      <View>
             <View style={styles.top} >
                <Image
                   source={ {
                    uri: "https://media.discordapp.net/attachments/986405178880192533/995417174770466937/bookshelf_1.png",
                    width: 100,
                    height: 100
                } }
                />
                    <Text style={styles.title}>Kafka Library</Text>
             </View>
             <View style={styles.end}>
                <Pressable onPress={()=> navigation.navigate('Login') } style={styles.buttonLogin}>
                    <Text style={styles.buttonLoginText}>Sign in</Text>
                </Pressable>
                <Pressable style={styles.buttonLogin} onPress={
                    ()=> navigation.navigate('Cadastro')
                }>
                    <Text style={styles.buttonLoginText}>Sign Up</Text>
                </Pressable>
            </View>
      </View> 
      </LinearGradient>
    )
}


const styles = StyleSheet.create({
    bgColor: {
        width: "100%",
        height: "100%"
    },
    top: {
         width: "100%",
         height: "50%",
        //  backgroundColor: 'red',
         justifyContent: "center",
         alignItems: "center"
    },
    end: {
        width: "100%",
        height: "50%",
        // backgroundColor: 'green',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    title: {
        fontSize: 60,
        fontWeight: "bold",
        color: '#fff'
    },
    buttonLogin: {
        padding: 35,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        marginBottom: 0

    },
    buttonLoginText: {
          color: 'blue',
          fontSize: 25,
          fontWeight: 'bold'
    }
})

export default Initial;